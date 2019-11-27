package urjc.ovteaching;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.openvidu.java.client.OpenViduRole;
import io.openvidu.java.client.Session;
import io.openvidu.java.client.SessionProperties;
import io.openvidu.java.client.TokenOptions;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.users.User;

@Component
public class OpenViduComponent {

	private OpenVidu openVidu;
	private String OPENVIDU_URL;
	private String SECRET;

	private Map<Long, Session> roomIdSession;
	private Map<String, Map<Long, String>> sessionIdUserIdToken;

	public OpenViduComponent(@Value("${openvidu.secret}") String secret, @Value("${openvidu.url}") String openviduUrl) {
		this.SECRET = secret;
		this.OPENVIDU_URL = openviduUrl;
		this.openVidu = new OpenVidu(OPENVIDU_URL, SECRET);
		this.roomIdSession = new ConcurrentHashMap<>();
		this.sessionIdUserIdToken = new ConcurrentHashMap<>();
	}

	public OpenVidu getOpenVidu() {
		return openVidu;
	}

	public String getOPENVIDU_URL() {
		return OPENVIDU_URL;
	}

	public String getSECRET() {
		return SECRET;
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
		this.sessionIdUserIdToken.get(session.getSessionId()).put(user.getId(), token);
	}

	public String generateToken(Room room, User user)throws OpenViduJavaClientException, OpenViduHttpException {
		Session session = this.roomIdSession.get(room.getId());
		OpenViduRole role = room.isModerator(user) ? OpenViduRole.PUBLISHER : OpenViduRole.SUBSCRIBER;
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
		OpenViduRole role = room.isModerator(user) ? OpenViduRole.PUBLISHER : OpenViduRole.SUBSCRIBER;
		TokenOptions tokenOpts = new TokenOptions.Builder().role(role).data("SERVER=" + user.getName()).build();
		String token = session.generateToken(tokenOpts);
		this.sessionIdUserIdToken.get(session.getSessionId()).put(user.getId(), token);
		return token;
	}
	
	public String removeUser(Room room, User user) {
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
}
