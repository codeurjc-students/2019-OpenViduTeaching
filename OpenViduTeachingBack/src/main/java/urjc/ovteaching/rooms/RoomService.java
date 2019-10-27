package urjc.ovteaching.rooms;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

	@Autowired
	private RoomRepository roomRep;

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
}

