package urjc.ovteaching;

import java.io.InputStreamReader;
import java.io.Reader;
import java.util.List;

import javax.annotation.PostConstruct;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import urjc.ovteaching.openvidu.OpenViduComponent;
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
	
	@Autowired
    ResourceLoader resourceLoader;
	
	@Value("${INITIAL_DATA_FILE}")
	private String initialFile;

	@SuppressWarnings("unchecked")
	@PostConstruct
	public void init() {
		try {
			if(initialFile.startsWith("/") || initialFile.matches("[a-zA-Z]\\:.*")) {
				initialFile = "file:" + initialFile;
			}
			System.out.println("Reading from file: " + initialFile);
			Reader reader = new InputStreamReader(resourceLoader.getResource(initialFile).getInputStream());
			JSONObject fileObject = (JSONObject) (new JSONParser().parse(reader));
			
			JSONArray roomList = (JSONArray) fileObject.get("rooms");
            roomList.forEach(room -> saveRoomObject((JSONObject) room));
			
            JSONArray userList = (JSONArray) fileObject.get("users");
            userList.forEach(user -> saveUserObject((JSONObject) user));
		} catch (Exception e) {
			e.printStackTrace();
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
		if(moddedRooms != null && !moddedRooms.isEmpty()) {
			roles[1] = "ROLE_ADMIN";
		}
		User user =  new User(userName, password, roles);
		
		if(moddedRooms != null && !moddedRooms.isEmpty()) {
			for(String moddedName: moddedRooms) {
				Room moddedRoom = roomServ.findByName(moddedName);
				user.addModdedRoom(moddedRoom);
			}
		}
		
		List<String> presentedRooms = (List<String>) userObject.get("presentedRooms");
		if(presentedRooms != null && !presentedRooms.isEmpty()) {
			for(String presentedName: presentedRooms) {
				Room presentedRoom = roomServ.findByName(presentedName);
				user.addPresentedRoom(presentedRoom);
			}
		}
		
		List<String> participatedRooms = (List<String>) userObject.get("participatedRooms");
		if(participatedRooms != null && !participatedRooms.isEmpty()) {
			for(String participatedName: participatedRooms) {
				Room participatedRoom = roomServ.findByName(participatedName);
				user.addParticipatedRoom(participatedRoom);
			}
		}
		
		userServ.save(user);
		
		System.out.println("Added user: " + userName);
	}

}
