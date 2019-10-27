package urjc.ovteaching.rooms;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserComponent;

@CrossOrigin
@RestController
public class RoomController {

	@Autowired
	private RoomService roomServ;

	@Autowired
	private UserComponent userComponent;

	@PostMapping("/api/createNewRoom/{roomName}")
	public ResponseEntity<String> createNewRoom(@PathVariable String roomName, HttpServletRequest request) {
		if (!request.isUserInRole("ADMIN")) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			User currentUser = userComponent.getLoggedUser();
			Room room = new Room(currentUser, roomName);
			roomServ.save(room);
			return new ResponseEntity<>(room.getName(), HttpStatus.CREATED);
		}
	}

	@GetMapping("/api/getParticipantInviteURL/{roomName}")
	public ResponseEntity<String> getParticipantInviteURL(@PathVariable String roomName) {
		Room room = roomServ.findByName(roomName);
		if (!room.isModerator(userComponent.getLoggedUser())) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<>(room.getParticipantInviteCode(), HttpStatus.OK);
		}
	}

	@GetMapping("/api/getModeratorInviteURL/{roomName}")
	public ResponseEntity<String> getModeratorInviteURL(@PathVariable String roomName) {
		Room room = roomServ.findByName(roomName);
		if (!room.isModerator(userComponent.getLoggedUser())) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			return new ResponseEntity<>(room.getModeratorInviteCode(), HttpStatus.OK);
		}
	}
}
