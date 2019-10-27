package urjc.ovteaching.rooms;

import org.springframework.data.jpa.repository.JpaRepository;

import urjc.ovteaching.users.User;

public interface RoomRepository extends JpaRepository<Room, Long> {

	Room findByName(String name);

}
