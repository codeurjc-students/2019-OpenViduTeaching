package urjc.ovteaching;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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

	@PostConstruct
	public void init() {
		Room roomA = new Room("roomA");
		Room roomB = new Room("roomB");
		roomServ.save(roomA);
		roomServ.save(roomB);
		
		userServ.save(new User("student1", "pass", "ROLE_USER"));
		userServ.save(new User("student2", "pass", "ROLE_USER"));
		User teacher = new User("teacher", "pass", "ROLE_USER", "ROLE_ADMIN");
		teacher.addModdedRoom(roomA);
		teacher.addModdedRoom(roomB);
		userServ.save(teacher);
	}

}

