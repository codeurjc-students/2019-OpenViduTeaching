package urjc.ovteaching.rooms;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

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
	@JsonView(Room.NameOnly.class)
	public ResponseEntity<Room> createNewRoom(@PathVariable String roomName, HttpServletRequest request) {
		if (roomServ.findByName(roomName) != null) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		Room room = new Room(roomName);
		roomServ.addRoomWithMod(room, user);
		return new ResponseEntity<>(room, HttpStatus.CREATED);
	}

	/**
	 * Gets an invite code from a room
	 * 
	 * @param roomName the name of the room
	 * @param role     participant or moderator
	 * @return the invite code
	 */
	@GetMapping("/room/{roomName}/inviteCode/{role}")
	public ResponseEntity<String> getInviteCode(HttpServletRequest request, @PathVariable String roomName, @PathVariable String role) {
		Room room = roomServ.findByName(roomName);
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		if (room != null) {
			if (!room.isModerator(user)) {
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			} else {
				if (role.equals("participant")) {
					return new ResponseEntity<>(room.getParticipantInviteCode(), HttpStatus.OK);
				} else if (role.equals("moderator")) {
					return new ResponseEntity<>(room.getModeratorInviteCode(), HttpStatus.OK);
				} else if (role.equals("presenter")) {
					return new ResponseEntity<>(room.getPresenterInviteCode(), HttpStatus.OK);
				}
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	/**
	 * Checks whether a room with that name or code exists
	 * 
	 * @return the room with either code (participant or moderator) or name
	 */
	@GetMapping("/room/{codeOrName}")
	public ResponseEntity<String> getRoomByInviteCodeOrName(@PathVariable String codeOrName) {
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
	 * @return the room with a specific code (participant, presenter or moderator)
	 */
	@PutMapping("/room/{code}/user")
	@JsonView(User.WithRooms.class)
	public ResponseEntity<User> newUserInRoom(HttpServletRequest request, @PathVariable String code) {
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		Room room = roomServ.findByInviteCode(code);

		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (room.isModerator(user)) {
			//Automatically enter if already a mod 
			return new ResponseEntity<>(HttpStatus.OK);
		}
		if (code.equals(room.getPresenterInviteCode()) && room.isPresenter(user)) {
			//Automatically enter as presenter if already a presenter 
			return new ResponseEntity<>(HttpStatus.OK);
		}
		if (code.equals(room.getParticipantInviteCode()) && (room.isParticipant(user) || room.isPresenter(user))) {
			//Automatically enter if already in it
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		if (code.equals(room.getParticipantInviteCode())) {
			user.addParticipatedRoom(room);
		} else if(code.equals(room.getModeratorInviteCode())){
			roomServ.makeModerator(user, room);
			if (!user.getRoles().contains("ROLE_ADMIN")) {
				// Makes user admin if they weren't
				user.addRole("ROLE_ADMIN");
			}
		} else {
			roomServ.makePresenter(user, room);
		}
		roomServ.save(room);
		userServ.save(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	/**
	 * Gets the users from a room
	 * 
	 * @return the users from the room, with their role
	 */
	@SuppressWarnings("unchecked")
	@JsonView(User.NameOnly.class)
	@GetMapping("/room/{roomName}/assistants")
	public ResponseEntity<JSONObject> getAssistants(@PathVariable String roomName, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (room.isInRoom(user)) {
			Collection<User> connected = this.roomServ.getConnectedAssistants(room);
			JSONObject response = new JSONObject();

			Set<JSONObject> moderators = new HashSet<>();
			for (User mod : room.getModerators()) {
				JSONObject userJson = new JSONObject();
				userJson.put("name", mod.getName());
				userJson.put("connected", connected.contains(mod));
				moderators.add(userJson);
			}

			Set<JSONObject> presenters = new HashSet<>();
			for (User pres : room.getPresenters()) {
				JSONObject userJson = new JSONObject();
				userJson.put("name", pres.getName());
				userJson.put("connected", connected.contains(pres));
				presenters.add(userJson);
			}

			Set<JSONObject> participants = new HashSet<>();
			for (User part : room.getParticipants()) {
				JSONObject userJson = new JSONObject();
				userJson.put("name", part.getName());
				userJson.put("connected", connected.contains(part));
				participants.add(userJson);
			}

			response.put("moderators", moderators);
			response.put("presenters", presenters);
			response.put("participants", participants);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	/**
	 * Makes the user raise their hand
	 * 
	 * @return the position in the queue
	 */
	@SuppressWarnings("unchecked")
	@PostMapping("/room/{roomName}/raiseHand")
	public ResponseEntity<Integer> raiseHand(@PathVariable String roomName, @RequestBody JSONObject handRaisedUser, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (room.isInRoom(user)) {
			handRaisedUser.put("username", user.getName());
			this.roomServ.checkConnectedHandRaisedUsers(room);
			Integer position = room.addHandRaisedUser(handRaisedUser);
			if(position.equals(-1)) {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
			this.roomServ.save(room);
			return new ResponseEntity<>(position, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	/**
	 * Makes the user lower their hand
	 * 
	 * @return the httpStatus of the operation
	 */
	@DeleteMapping("/room/{roomName}/raiseHand")
	public ResponseEntity<?> lowerHand(@PathVariable String roomName, @RequestBody JSONObject body, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (room.isInRoom(user)) {
			boolean wasRemoved = room.removeHandRaisedUser(body);
			this.roomServ.save(room);
			if(wasRemoved) {
				return new ResponseEntity<>(HttpStatus.OK);
			}
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	/**
	 * Gets the users who are raising their hand in that room
	 * 
	 * @return the list of the users raising their hand
	 */
	@GetMapping("/room/{roomName}/raiseHand")
	public ResponseEntity<List<JSONObject>> getRaisedHands(@PathVariable String roomName, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		//User user = userServ.findByName(request.getUserPrincipal().getName());
		User user = this.userComponent.getLoggedUser();
		if (room == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (room.isInRoom(user)) {
			this.roomServ.checkConnectedHandRaisedUsers(room);
			this.roomServ.save(room);
			return new ResponseEntity<>(room.getHandRaisedUsers(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
}