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
import urjc.ovteaching.users.UserService;

@CrossOrigin
@RestController
public class RoomController {

	@Autowired
	private RoomService roomServ;

	@Autowired
	private UserService userServ;
	
	@Autowired
	private UserComponent userComponent;

	@PostMapping("/api/room/{roomName}")
	public ResponseEntity<String> createNewRoom(@PathVariable String roomName, HttpServletRequest request) {
		if (!request.isUserInRole("ADMIN")) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			if (roomServ.findByName(roomName)!=null) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			User currentUser = userComponent.getLoggedUser();
			Room room = new Room(roomName);
			roomServ.addRoomWithMod(room, currentUser);
			return new ResponseEntity<>(room.getName(), HttpStatus.CREATED);
		}
	}

	@GetMapping("/api/room/{roomName}/inviteURL/{role}")
	public ResponseEntity<String> getInviteURL(@PathVariable String roomName, @PathVariable String role) {
		Room room = roomServ.findByName(roomName);
		if (room != null) {
			if (!room.isModerator(userComponent.getLoggedUser())) {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			} else {
				if (role.equals("participant")) {
					return new ResponseEntity<>(room.getParticipantInviteCode(), HttpStatus.OK);
				} else if (role.equals("moderator")) {
					return new ResponseEntity<>(room.getModeratorInviteCode(), HttpStatus.OK);
				}
			}
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/api/room/{roomName}/inviteURL/{role}/user/{userName}")
	public ResponseEntity<String> newUserInRoom(@PathVariable String roomName, @PathVariable String role, @PathVariable String userName) { 
		Room room = roomServ.findByName(roomName);
		User user;
		if(!userComponent.isLoggedUser()) {
			user = new User(userName, "pass"); //TODO change pass
		} else {
			user = userComponent.getLoggedUser();
		}
		if(room.isModerator(user)) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		if (role.equals("participant")) {
			if(room.isParticipant(user)) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			room.addParticipant(user);
			return new ResponseEntity<>(user.getName(), HttpStatus.OK);
		} else if (role.equals("moderator")) {
			room.addModerator(user);
			if(!user.getRoles().contains("ADMIN")) {
				user.addRole("ROLE_ADMIN");
			}
			roomServ.save(room);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		userServ.save(user);
		return new ResponseEntity<>(user.getName(), HttpStatus.OK);
	}
}
