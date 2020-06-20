package urjc.ovteaching.jsonReader;

import java.util.List;

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

	public void readJson(JSONObject json) throws JsonReaderException {
		this.readRooms((JSONArray) json.get("rooms"));
		this.readUsers((JSONArray) json.get("users"));
	}

	@SuppressWarnings("unchecked")
	public void readRooms(JSONArray roomList) throws JsonReaderException {
		try {
			if (roomList != null) {
				roomList.forEach(room -> saveRoomObject((JSONObject) room));
			}
		} catch (Exception e) {
			throw new JsonReaderException(e);
		}
	}

	@SuppressWarnings("unchecked")
	public void readUsers(JSONArray userList) throws JsonReaderException {
		try {
			if (userList != null) {
				userList.forEach(user -> saveUserObject((JSONObject) user));
			}
		} catch (Exception e) {
			throw new JsonReaderException(e);
		}
	}

	private void saveRoomObject(JSONObject roomObject) {
		String roomName = (String) roomObject.get("name");
		roomServ.save(new Room(roomName));
		System.out.println("Added room: " + roomName);
	}

	@SuppressWarnings("unchecked")
	private void saveUserObject(JSONObject userObject) {
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
				user.addModdedRoom(moddedRoom);
			}
		}

		List<String> presentedRooms = (List<String>) userObject.get("presentedRooms");
		if (presentedRooms != null && !presentedRooms.isEmpty()) {
			for (String presentedName : presentedRooms) {
				Room presentedRoom = roomServ.findByName(presentedName);
				user.addPresentedRoom(presentedRoom);
			}
		}

		List<String> participatedRooms = (List<String>) userObject.get("participatedRooms");
		if (participatedRooms != null && !participatedRooms.isEmpty()) {
			for (String participatedName : participatedRooms) {
				Room participatedRoom = roomServ.findByName(participatedName);
				user.addParticipatedRoom(participatedRoom);
			}
		}

		userServ.save(user);

		System.out.println("Added user: " + userName);
	}

}
