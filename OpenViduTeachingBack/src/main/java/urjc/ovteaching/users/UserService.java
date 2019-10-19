package urjc.ovteaching.users;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository userRep;

	public Optional<User> findOne(long id) {
		return userRep.findById(id);
	}

	public List<User> findAll() {
		return userRep.findAll();
	}

	public void save(User user) {
		userRep.save(user);
	}

	public void delete(long id) {
		userRep.deleteById(id);
	}
	
	public User findByName(String name) {
		return userRep.findByName(name);
	}
}
