package urjc.ovteaching.rooms.controllers;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import urjc.ovteaching.OpenViduComponent;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserComponent;
import urjc.ovteaching.users.UserService;

@RequestMapping("/ovTeachingApi")
@CrossOrigin
@RestController
public class RoomController {

	@Autowired
	private RoomService roomServ;

	@Autowired
	private UserService userServ;

	@Autowired
	private UserComponent userComponent;

	/**
	 * Creates a new room
	 * 
	 * @return the room name
	 */
	@PostMapping("/room/{roomName}")
	public ResponseEntity<String> createNewRoom(@PathVariable String roomName, HttpServletRequest request) {
		if (!request.isUserInRole("ADMIN")) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if (roomServ.findByName(roomName) != null) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		User currentUser = userServ.findByName(request.getUserPrincipal().getName());
		// User currentUser = this.userComponent.getLoggedUser();
		Room room = new Room(roomName);
		roomServ.addRoomWithMod(room, currentUser);
		return new ResponseEntity<>(room.getName(), HttpStatus.CREATED);
	}

	/**
	 * Gets an invite code from a room
	 * 
	 * @param roomName the name of the room
	 * @param role     participant or moderator
	 * @return the invite code
	 */
	@GetMapping("/room/{roomName}/inviteCode/{role}")
	public ResponseEntity<String> getInviteCode(HttpServletRequest request, @PathVariable String roomName,
			@PathVariable String role) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(request.getUserPrincipal().getName());
		// User user = this.userComponent.getLoggedUser();
		if (room != null) {
			if (!room.isModerator(user)) {
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

	/**
	 * Checks whether a room with that name or code exists
	 * 
	 * @return the room with either code (participant or moderator) or name
	 */
	@GetMapping("/room/{codeOrName}")
	public ResponseEntity<String> getRoomByInviteCode(@PathVariable String codeOrName) {
		Room room = roomServ.findByName(codeOrName);
		if (room == null) {
			room = roomServ.findByInviteCode(codeOrName);
			if (room == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		return new ResponseEntity<>(room.getName(), HttpStatus.OK);
	}

	/**
	 * Logs a user into a room
	 * 
	 * @return the room with either code (participant or moderator)
	 */
	@PutMapping("/room/{code}/user/{userName}")
	@JsonView(User.WithRooms.class)
	public ResponseEntity<User> newUserInRoom(HttpSession session, HttpServletRequest request,
			@PathVariable String code, @PathVariable String userName) {
		User user = userServ.findByName(userName);
		String password = "pass"; // TODO change pass
		Room room = roomServ.findByInviteCode(code);

		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (user == null) {
			// Creates user if it doesn't exist
			user = new User(userName, password, "ROLE_USER");
			userServ.save(user);
		} else {
			if (room.isModerator(user)) {
				// Cannot enter a room if already a mod of it
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			if (code.equals(room.getParticipantInviteCode()) && room.isParticipant(user)) {
				// Cannot enter a room as participant if already in it
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
		}
		try {
			/*
			 * Authentication auth = SecurityContextHolder.getContext().getAuthentication();
			 * if (auth != null){ new SecurityContextLogoutHandler().logout(request,
			 * response, auth); }
			 */
			request.login(userName, password);
		} catch (ServletException e) {
			e.toString();
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		/*
		 * if (!userComponent.isLoggedUser()) { return new
		 * ResponseEntity<>(HttpStatus.UNAUTHORIZED); }
		 */
		if (code.equals(room.getParticipantInviteCode())) {
			user.addParticipatedRoom(room);
		} else {
			roomServ.makeModerator(user, room);
			if (!user.getRoles().contains("ADMIN")) {
				// Makes user admin if they weren't
				user.addRole("ROLE_ADMIN");
			}
		}
		roomServ.save(room);
		userServ.save(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
}
