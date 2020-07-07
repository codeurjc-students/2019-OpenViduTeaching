package urjc.ovteaching.users;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import urjc.ovteaching.jsonReader.ConflictDatabaseException;
import urjc.ovteaching.jsonReader.JsonReaderException;
import urjc.ovteaching.jsonReader.JsonReaderService;
import urjc.ovteaching.jsonReader.NotFoundDatabaseException;
import urjc.ovteaching.rooms.Room;

@RequestMapping("/ovTeachingApi")
@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private UserService userServ;
	
	@Autowired
	private JsonReaderService jsonReaderService;

	/**
	 * @return a userName if it exists
	 */
	@GetMapping("/user/{name}")
	public ResponseEntity<String> checkUsername(@PathVariable String name) {
		User user = userServ.findByName(name);
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(user.getName(), HttpStatus.OK);
	}
	
	/**
	 * @return Rooms where the current user is
	 */
	@SuppressWarnings("unchecked")
	@GetMapping("/user/rooms")
	@JsonView(Room.NameOnly.class)
	public ResponseEntity<JSONObject> getRooms() {
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		JSONObject response = new JSONObject();
		response.put("modded",user.getModdedRooms());
		response.put("presented",user.getPresentedRooms());
		response.put("participated",user.getParticipatedRooms());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@PostMapping("/users")
	public ResponseEntity<?> addUsers(@RequestBody JSONObject body) {
		try {
			body = (JSONObject) new JSONParser().parse(body.toString());
			this.jsonReaderService.readUsers((JSONArray) body.get("users"));
		} catch (JsonReaderException e) {
			System.err.println(e.getCause());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (ParseException e) {
			System.err.println(e.toString());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} catch (NotFoundDatabaseException e) {
			String message = "Room not found: " + e.getRoomName() + " for user: " + e.getUserName();
			System.err.println(message);
			return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
		} catch (ConflictDatabaseException e) {
			String message = e.getClassName() + " \"" + e.getName() + "\" already found in the database";
			System.err.println(message);
			return new ResponseEntity<>(message, HttpStatus.CONFLICT);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping("/logIn")
	@JsonView(User.WithRooms.class)
	public ResponseEntity<User> logIn() {
		if (!userComponent.isLoggedUser()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			User loggedUser = this.userServ.findByName(userComponent.getLoggedUser().getName());
			return new ResponseEntity<>(loggedUser, HttpStatus.OK);
		}
	}

	@RequestMapping("/logOut")
	public ResponseEntity<Boolean> logOut(HttpSession session) {
		if (!userComponent.isLoggedUser()) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		} else {
			session.invalidate();
			User user = userServ.findByName(this.userComponent.getLoggedUser().getName());
			if(user.isTemporary()) {
				this.userServ.delete(user);
			}
			return new ResponseEntity<>(true, HttpStatus.OK);
		}
	}
	
	@RequestMapping("/register/{user}/{pass}")
	@JsonView(User.WithRooms.class)
	public ResponseEntity<User> register(@PathVariable String user, @PathVariable String pass, HttpServletRequest request) {
		User newUser = userServ.findByName(user);
		if (newUser == null) {
			newUser = userServ.save(new User(user, pass, true, "ROLE_USER"));
			try {
				request.login(user, pass);
			} catch (ServletException e) {
				e.printStackTrace();
			}
			return new ResponseEntity<User>(newUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<User>(HttpStatus.CONFLICT);
		}
	}
}
