package urjc.ovteaching.users;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import urjc.ovteaching.rooms.Room;

@RequestMapping("/ovTeachingApi")
@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private UserService userServ;

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
	@GetMapping("/user/rooms")
	@JsonView(Room.NameOnly.class)
	public ResponseEntity<JSONObject> getRooms(HttpServletRequest request) {
		if (!request.isUserInRole("USER")) {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		User user = userServ.findByName(request.getUserPrincipal().getName());
		// User user = this.userComponent.getLoggedUser();
		if (user == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		JSONObject response = new JSONObject();
		response.put("modded",user.getModdedRooms());
		response.put("presented",user.getPresentedRooms());
		response.put("participated",user.getParticipatedRooms());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@JsonView(User.WithRooms.class)
	@RequestMapping("/logIn")
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
			return new ResponseEntity<>(true, HttpStatus.OK);
		}
	}
}
