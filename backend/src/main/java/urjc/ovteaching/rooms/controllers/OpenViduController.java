package urjc.ovteaching.rooms.controllers;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
public class OpenViduController {

	@Autowired
	private RoomService roomServ;

	@Autowired
	private UserService userServ;

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private OpenViduComponent openViduComponent;

	/**
	 * Creates a session for a room
	 * 
	 * @return the session's id
	 */
	@PostMapping("/room/{roomName}/session")
	public ResponseEntity<String> createSession(@PathVariable String roomName, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		try {
			String sessionId;
			if (!this.openViduComponent.isSessionCreated(room)) {
				sessionId = this.openViduComponent.createSession(room);
			} else {
				sessionId = this.openViduComponent.getSession(room);
			}
			return new ResponseEntity<>(sessionId, HttpStatus.CREATED);
		} catch (OpenViduJavaClientException | OpenViduHttpException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Creates token for user in a room
	 * 
	 * @return The token
	 */
	@SuppressWarnings("unchecked")
	@GetMapping("/room/{roomName}/token")
	public ResponseEntity<JSONObject> generateToken(@PathVariable String roomName, HttpServletRequest request) {
		if (!request.isUserInRole("USER")) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(request.getUserPrincipal().getName());
		// User user = this.userComponent.getLoggedUser();
		if (!request.isUserInRole("USER")) { // User not logged
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isInRoom(user)) { // User not in that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}

		JSONObject json = new JSONObject();
		if (!this.openViduComponent.isSessionCreated(room)) { // Create session if there isn't
			try {
				this.openViduComponent.createSession(room);
			} catch (OpenViduJavaClientException | OpenViduHttpException e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		try {
			String token = this.openViduComponent.generateToken(room, user);
			this.openViduComponent.addUserWithTokenToRoom(room, user, token);
			json.put("token", token);
			return new ResponseEntity<>(json, HttpStatus.OK);
		} catch (OpenViduJavaClientException e1) {
			// Internal error generate
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		} catch (OpenViduHttpException e2) {
			if (404 == e2.getStatus()) {
				// Invalid sessionId (user left unexpectedly). Session object is not valid
				// anymore. Must clean invalid session and create a new one
				try {
					String token = this.openViduComponent.replaceSession(room, user);
					json.put("token", token);
					return new ResponseEntity<>(json, HttpStatus.OK);
				} catch (OpenViduJavaClientException | OpenViduHttpException e3) {
					return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
				}
			} else {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
	}

	/**
	 * Logs user out of a session
	 * 
	 * @return HttpStatus of the operation
	 */
	@DeleteMapping("/room/{roomName}/user")
	public ResponseEntity<String> removeUser(@PathVariable String roomName, HttpServletRequest request)
			throws Exception {
		if (!request.isUserInRole("USER")) { // User not logged
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(request.getUserPrincipal().getName());
		// User currentUser = this.userComponent.getLoggedUser();

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isInRoom(user)) { // User not in that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if (!this.openViduComponent.isSessionCreated(room)) { // No session created for that room
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
		if (this.openViduComponent.removeUser(room, user) != null) {
			// This user has left the room
			if (this.openViduComponent.isSessionEmpty(room)) {
				// The last user has left the room
				this.openViduComponent.removeSession(room);
			}
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			// User didn't have a valid token
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
