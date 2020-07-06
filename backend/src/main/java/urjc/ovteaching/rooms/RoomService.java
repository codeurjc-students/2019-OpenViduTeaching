package urjc.ovteaching.rooms;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import urjc.ovteaching.openvidu.OpenViduComponent;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserService;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRep;

	@Autowired
	private UserService userServ;
	
	@Autowired
	private OpenViduComponent openviduComponent;

	public Optional<Room> findOne(long id) {
		return roomRep.findById(id);
	}

	public List<Room> findAll() {
		return roomRep.findAll();
	}

	public void save(Room room) {
		roomRep.save(room);
	}
	
	public void saveAll(Collection<Room> rooms) {
		roomRep.saveAll(rooms);
	}

	public void delete(long id) {
		roomRep.deleteById(id);
	}

	public Room findByName(String name) {
		return roomRep.findByName(name);
	}

	public void addRoomWithMod(Room room, User mod) {
		roomRep.save(room);
		mod.addModdedRoom(room);
		userServ.save(mod);
	}
	
	public void makeModerator(User user, Room room) {
		user.addModdedRoom(room);
		user.removeParticipatedRoom(room);
		user.removePresentedRoom(room);
		roomRep.save(room);
		userServ.save(user);
	}
	
	public void makePresenter(User user, Room room) {
		user.addPresentedRoom(room);
		user.removeParticipatedRoom(room);
		roomRep.save(room);
		userServ.save(user);
	}
	
	public void leaveRoom(User user, Room room) {
		user.leaveRoom(room);
		roomRep.save(room);
		userServ.save(user);
	}

	public Room findByInviteCode(String code) {
		Room room = roomRep.findByCodeModerator(code);
		if (room != null) {
			return room;
		} else {
			room = roomRep.findByCodeParticipant(code);
			if (room != null) {
				return room;
			} else {
				return roomRep.findByCodePresenter(code);
			}
		}
	}
	
	public void checkConnectedHandRaisedUsers(Room room) {
		Iterator<JSONObject> it = room.getHandRaisedUsers().iterator();
		while(it.hasNext()) {
			JSONObject nextUser = it.next();
			User fakeUser = new User((String) nextUser.get("username"), "pass", false, "USER_ROLE");
			if(!this.openviduComponent.getConnectedAssistants(room).contains(fakeUser)) {
				it.remove();
			}
		}
	}
	
	public Collection<User> getConnectedAssistants(Room room) {
		return openviduComponent.getConnectedAssistants(room);
	}
	
}
