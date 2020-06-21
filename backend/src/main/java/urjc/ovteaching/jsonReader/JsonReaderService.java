package urjc.ovteaching.jsonReader;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserService;

@Service
public class JsonReaderService {

	@Autowired
	UserService userServ;

	@Autowired
	RoomService roomServ;

	public void readJson(JSONObject json) throws JsonReaderException, NotFoundDatabaseException {
		this.readRooms((JSONArray) json.get("rooms"));
		this.readUsers((JSONArray) json.get("users"));
	}

	public void readRooms(JSONArray roomList) throws JsonReaderException {
		try {
			Set<Room> rooms = new HashSet<>();
			if (roomList != null) {
				for (Object roomObject : roomList) {
					Room room = getRoomObject((JSONObject) roomObject);
					rooms.add(room);
				}
				this.roomServ.saveAll(rooms);
				System.out.println("Saved all rooms");
			}
		} catch (Exception e) {
			throw new JsonReaderException(e);
		}
	}

	public void readUsers(JSONArray userList) throws JsonReaderException, NotFoundDatabaseException {
		try {
			if (userList != null) {
				Set<User> users = new HashSet<>();
				for (Object userObject : userList) {
					User user = getUserObject((JSONObject) userObject);
					users.add(user);
				}
				this.userServ.saveAll(users);
				System.out.println("Saved all users");
			}
		} catch (RuntimeException e) {
			throw new JsonReaderException(e);
		} catch (NotFoundDatabaseException e) {
			throw new NotFoundDatabaseException(e.getRoomName(), e.getUserName());
		}
	}

	private Room getRoomObject(JSONObject roomObject) {
		String roomName = (String) roomObject.get("name");
		System.out.println("Added room: " + roomName);
		return new Room(roomName);
	}

	@SuppressWarnings("unchecked")
	private User getUserObject(JSONObject userObject) throws NotFoundDatabaseException {
		String userName = (String) userObject.get("name");
		String password = (String) userObject.get("password");
		String[] roles = new String[2];
		roles[0] = "ROLE_USER";
		List<String> moddedRooms = (List<String>) userObject.get("moddedRooms");
		if (moddedRooms != null && !moddedRooms.isEmpty()) {
			roles[1] = "ROLE_ADMIN";
		}
		User user = new User(userName, password, roles);

		if (moddedRooms != null && !moddedRooms.isEmpty()) {
			for (String moddedName : moddedRooms) {
				Room moddedRoom = roomServ.findByName(moddedName);
				if (moddedRoom == null) {
					throw new NotFoundDatabaseException(moddedName, userName);
				}
				user.addModdedRoom(moddedRoom);
			}
		}

		List<String> presentedRooms = (List<String>) userObject.get("presentedRooms");
		if (presentedRooms != null && !presentedRooms.isEmpty()) {
			for (String presentedName : presentedRooms) {
				Room presentedRoom = roomServ.findByName(presentedName);
				if (presentedRoom == null) {
					throw new NotFoundDatabaseException(presentedName, userName);
				}
				user.addPresentedRoom(presentedRoom);
			}
		}

		List<String> participatedRooms = (List<String>) userObject.get("participatedRooms");
		if (participatedRooms != null && !participatedRooms.isEmpty()) {
			for (String participatedName : participatedRooms) {
				Room participatedRoom = roomServ.findByName(participatedName);
				if (participatedRoom == null) {
					throw new NotFoundDatabaseException(participatedName, userName);
				}
				user.addParticipatedRoom(participatedRoom);
			}
		}

		System.out.println("Added user: " + userName);
		return user;
	}

}
