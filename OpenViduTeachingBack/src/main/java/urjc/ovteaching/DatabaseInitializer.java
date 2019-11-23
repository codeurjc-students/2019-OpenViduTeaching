package urjc.ovteaching;

import java.util.HashMap;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.openvidu.java.client.Session;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserService;

@Component
public class DatabaseInitializer {

	@Autowired
	UserService userServ;

	@Autowired
	RoomService roomServ;

	@Autowired
	OpenViduComponent openViduComponent;

	@PostConstruct
	public void init() {
		try {
			
			Room roomA = new Room("roomA");
			Room roomB = new Room("roomB");
			roomServ.save(roomA);
			roomServ.save(roomB);

			Session sessionA = this.openViduComponent.getOpenVidu().createSession();
			this.openViduComponent.getLessonIdSession().put(roomA.getId(), sessionA);
			this.openViduComponent.getSessionIdUserIdToken().put(sessionA.getSessionId(), new HashMap<>());
			Session sessionB = this.openViduComponent.getOpenVidu().createSession();
			this.openViduComponent.getLessonIdSession().put(roomB.getId(), sessionB);
			this.openViduComponent.getSessionIdUserIdToken().put(sessionB.getSessionId(), new HashMap<>());
			
			User student1 = new User("student1", "pass", "ROLE_USER");
			User student2 = new User("student2", "pass", "ROLE_USER");
			User teacher = new User("teacher", "pass", "ROLE_USER", "ROLE_ADMIN");
			teacher.addModdedRoom(roomA);
			teacher.addModdedRoom(roomB);
			student1.addParticipatedRoom(roomA);
			student2.addParticipatedRoom(roomB);

			userServ.save(student1);
			userServ.save(student2);
			userServ.save(teacher);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
