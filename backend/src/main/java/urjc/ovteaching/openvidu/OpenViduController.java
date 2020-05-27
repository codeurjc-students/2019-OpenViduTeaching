package urjc.ovteaching.openvidu;

import java.io.IOException;

import javax.xml.ws.http.HTTPException;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

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
	public ResponseEntity<String> createSession(@PathVariable String roomName) {
		Room room = roomServ.findByName(roomName);
		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());
		if(!room.isInRoom(user)) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		try {
			if (!this.openViduComponent.isSessionCreated(room)) {
				return new ResponseEntity<>(this.openViduComponent.createSession(room), HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>(this.openViduComponent.getSession(room), HttpStatus.OK);
			}
		} catch (IOException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Creates token for user in a room
	 * 
	 * @return The token
	 */
	@GetMapping("/room/{roomName}/token")
	public ResponseEntity<String> generateToken(@PathVariable String roomName) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());
		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isInRoom(user)) { // User not in that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}

		// Create session if there isn't
		if (!this.openViduComponent.isSessionCreated(room)) {
			try {
				this.openViduComponent.createSession(room);
			} catch (IOException e) {
				e.printStackTrace();
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}

		try {
			String token = this.openViduComponent.generateToken(room, user);
			this.openViduComponent.addUserWithTokenToRoom(room, user, token);
			return new ResponseEntity<>(token, HttpStatus.OK);
		} catch (IOException e1) {
			// Internal error
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		} catch (HTTPException e2) {
			if (404 == e2.getStatusCode()) {
				// Invalid sessionId (user left unexpectedly). Session object is not valid
				// anymore. Must clean invalid session and create a new one
				try {
					String token = this.openViduComponent.replaceSession(room, user);
					return new ResponseEntity<>(token, HttpStatus.OK);
				} catch (IOException  e3) {
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
	public ResponseEntity<String> removeUser(@PathVariable String roomName) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

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
			this.roomServ.checkConnectedHandRaisedUsers(room);
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			// User didn't have a valid token
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Sends a signal with the type and data associated
	 * 
	 * @return HttpStatus of the operation
	 */
	@PostMapping("/room/{roomName}/signal/{type}")
	public ResponseEntity<?> sendSignal(@PathVariable String roomName, @PathVariable String type, @RequestBody JSONObject body) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isModerator(user)) { // User not a mod of the room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if (!this.openViduComponent.isSessionCreated(room) || this.openViduComponent.isSessionEmpty(room)) {
			// No session created for that room or it is empty
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
		try {
			JsonObject gsonBody = new Gson().fromJson(body.toString(), JsonObject.class);
			this.openViduComponent.sendSignal(room, gsonBody.getAsJsonArray("to"), type, gsonBody.getAsJsonObject("data"));
		} catch (IOException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
