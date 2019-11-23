package urjc.ovteaching;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.openvidu.java.client.OpenVidu;
import io.openvidu.java.client.Session;

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

	public Map<Long, Session> getLessonIdSession() {
		return roomIdSession;
	}

	public Map<String, Map<Long, String>> getSessionIdUserIdToken() {
		return sessionIdUserIdToken;
	}
}
