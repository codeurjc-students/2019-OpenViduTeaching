package urjc.ovteaching.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/ovTeachingApi")
@CrossOrigin
@RestController
public class UserController {

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
}
