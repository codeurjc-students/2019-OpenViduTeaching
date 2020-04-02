package urjc.ovteaching;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

import javax.net.ssl.SSLContext;

import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.ssl.SSLContextBuilder;
import org.apache.http.ssl.TrustStrategy;
import org.apache.http.util.EntityUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.openvidu.java.client.OpenViduRole;
import io.openvidu.java.client.Recording;
import io.openvidu.java.client.RecordingLayout;
import io.openvidu.java.client.RecordingProperties;
import io.openvidu.java.client.Session;
import io.openvidu.java.client.SessionProperties;
import io.openvidu.java.client.TokenOptions;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserService;

@Component
public class OpenViduComponent {

	@Autowired
	RoomService roomService;
	
	@Autowired
	UserService userService;
	
	private OpenVidu openVidu;
	private String OPENVIDU_URL;
	private String SECRET;
	
	private HttpClient httpClient;

	private Map<Long, Session> roomIdSession;
	private Map<String, Map<Long, String[]>> sessionIdUserIdToken;

	public OpenViduComponent(@Value("${openvidu.secret}") String secret, @Value("${openvidu.url}") String openviduUrl) {
		this.SECRET = secret;
		this.OPENVIDU_URL = openviduUrl;
		this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
		this.roomIdSession = new ConcurrentHashMap<>();
		this.sessionIdUserIdToken = new ConcurrentHashMap<>();
		
		TrustStrategy trustStrategy = new TrustStrategy() {
			@Override
			public boolean isTrusted(X509Certificate[] chain, String authType) throws CertificateException {
				return true;
			}
		};
		CredentialsProvider provider = new BasicCredentialsProvider();
		UsernamePasswordCredentials credentials = new UsernamePasswordCredentials("OPENVIDUAPP", this.SECRET);
		provider.setCredentials(AuthScope.ANY, credentials);
		SSLContext sslContext;
		try {
			sslContext = new SSLContextBuilder().loadTrustMaterial(null, trustStrategy).build();
		} catch (KeyManagementException | NoSuchAlgorithmException | KeyStoreException e) {
			throw new RuntimeException(e);
		}
		RequestConfig.Builder requestBuilder = RequestConfig.custom();
		requestBuilder = requestBuilder.setConnectTimeout(30000);
		requestBuilder = requestBuilder.setConnectionRequestTimeout(30000);
		this.httpClient = HttpClientBuilder.create().setDefaultRequestConfig(requestBuilder.build())
				.setConnectionTimeToLive(30, TimeUnit.SECONDS).setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
				.setSSLContext(sslContext).setDefaultCredentialsProvider(provider).build();
	}

	public boolean isSessionCreated(Room room) {
		return this.roomIdSession.get(room.getId()) != null;
	}

	public String createSession(Room room) throws OpenViduJavaClientException, OpenViduHttpException {
		SessionProperties sp = new SessionProperties.Builder().customSessionId(room.getName()).build();
		Session session = this.openVidu.createSession(sp);
		this.roomIdSession.put(room.getId(), session);
		this.sessionIdUserIdToken.put(session.getSessionId(), new HashMap<>());
		return session.getSessionId();
	}

	public String getSession(Room room) {
		return this.roomIdSession.get(room.getId()).getSessionId();
	}

	public void addUserWithTokenToRoom(Room room, User user, String token) {
		Session session = this.roomIdSession.get(room.getId());
		String[] tokens = new String[2];
		if (this.sessionIdUserIdToken.get(session.getSessionId()).get(user.getId()) == null) {
			tokens[0] = token; // Cam token
		} else {
			tokens[0] = this.sessionIdUserIdToken.get(session.getSessionId()).get(user.getId())[0];
			tokens[1] = token; // Screenshare token
		}
		this.sessionIdUserIdToken.get(session.getSessionId()).put(user.getId(), tokens);
	}

	public String generateToken(Room room, User user) throws OpenViduJavaClientException, OpenViduHttpException {
		Session session = this.roomIdSession.get(room.getId());
		OpenViduRole role = this.getRole(user, room);
		TokenOptions tokenOpts = new TokenOptions.Builder().role(role).data("SERVER=" + user.getName()).build();
		return session.generateToken(tokenOpts);
	}

	public String replaceSession(Room room, User user) throws OpenViduJavaClientException, OpenViduHttpException {
		Session session = this.roomIdSession.get(room.getId());
		this.sessionIdUserIdToken.remove(session.getSessionId());
		SessionProperties sp = new SessionProperties.Builder().customSessionId(room.getName()).build();
		session = this.openVidu.createSession(sp);
		this.roomIdSession.put(room.getId(), session);
		this.sessionIdUserIdToken.put(session.getSessionId(), new HashMap<>());
		OpenViduRole role = this.getRole(user, room);
		TokenOptions tokenOpts = new TokenOptions.Builder().role(role).data("SERVER=" + user.getName()).build();
		String token = session.generateToken(tokenOpts);
		String[] tokens = new String[2];
		tokens[0] = token; // Cam token
		this.sessionIdUserIdToken.get(session.getSessionId()).put(user.getId(), tokens);
		return token;
	}
	
	private OpenViduRole getRole(User user, Room room) {
		OpenViduRole role;
		if(room.isModerator(user)) {
			role = OpenViduRole.MODERATOR;
		} else if(room.isPresenter(user)) {
			role = OpenViduRole.PUBLISHER;
		} else if(room.isParticipant(user)) {
			role = OpenViduRole.SUBSCRIBER;
		} else {
			role = null;
		}
		return role;
	}
	
	public String[] removeUser(Room room, User user) {
		Session session = this.roomIdSession.get(room.getId());
		return this.sessionIdUserIdToken.get(session.getSessionId()).remove(user.getId());
	}

	public boolean isSessionEmpty(Room room) {
		Session session = this.roomIdSession.get(room.getId());
		return this.sessionIdUserIdToken.get(session.getSessionId()).isEmpty();
	}

	public void removeSession(Room room) {
		Session session = this.roomIdSession.remove(room.getId());
		this.sessionIdUserIdToken.remove(session.getSessionId());
	}
	
	public Collection<User> getConnectedAssistants(Room room) {
		Set<User> set = new HashSet<>();
		String roomName = room.getName();
		Map<Long, String[]> userIdMap = sessionIdUserIdToken.get(roomName);
		if(userIdMap == null) {
			return set;
		}
		for(Long userId: userIdMap.keySet()) {
			User user = userService.findOne(userId).get();
			set.add(user);
		}
		return set;
	}
	
	public String startRecording(Room room) {
		try {
			return this.openVidu.startRecording(this.roomIdSession.get(room.getId()).getSessionId()). getId();
		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public String stopRecording(Room room) {
		try {
			return this.openVidu.stopRecording(this.roomIdSession.get(room.getId()).getSessionId()).getId();
		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public void sendSignal(Room room, JsonArray to, String type, JsonObject data) throws UnsupportedEncodingException, IOException {
		Session session = this.roomIdSession.get(room.getId());
		
		HttpPost request = new HttpPost(this.OPENVIDU_URL + "/api/signal");

		JsonObject json = new JsonObject();
		json.addProperty("session", session.getSessionId());
		json.add("to", to);
		json.addProperty("type", "signal:" + type);
		json.addProperty("data", data.toString());

		StringEntity params = new StringEntity(json.toString());
		request.setHeader(HttpHeaders.CONTENT_TYPE, "application/json");
		request.setEntity(params);
		
		HttpResponse response = this.httpClient.execute(request);
		try {
			int statusCode = response.getStatusLine().getStatusCode();
			if ((statusCode == org.apache.http.HttpStatus.SC_OK)) {
				return;
			} else {
				throw new IOException("Openvidu error: " + statusCode);
			}
		} finally {
			EntityUtils.consumeQuietly(response.getEntity());
		}
	}
}
