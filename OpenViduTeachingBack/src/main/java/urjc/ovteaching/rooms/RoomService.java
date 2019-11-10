package urjc.ovteaching.rooms;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserService;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRep;

	@Autowired
	private UserService userServ;

	public Optional<Room> findOne(long id) {
		return roomRep.findById(id);
	}

	public List<Room> findAll() {
		return roomRep.findAll();
	}

	public void save(Room room) {
		roomRep.save(room);
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
		roomRep.save(room);
		userServ.save(user);
	}

	public Room findByInviteCode(String code) {
		Room room = roomRep.findByCodeModerator(code);
		if (room != null) {
			return room;
		} else {
			return roomRep.findByCodeParticipant(code);
		}
	}
}
