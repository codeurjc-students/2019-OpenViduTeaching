package urjc.ovteaching.rooms;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

	Room findByName(String name);
	
	Room findByCodeParticipant(String inviteCodeParticipant);
	
	Room findByCodeModerator(String inviteCodeModerator);
	
	Room findByCodePresenter(String inviteCodePresenter);

}
