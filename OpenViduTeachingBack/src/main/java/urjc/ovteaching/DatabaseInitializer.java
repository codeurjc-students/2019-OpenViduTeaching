package urjc.ovteaching;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserService;

@Component
public class DatabaseInitializer {

	@Autowired
	UserService userServ;

	@PostConstruct
	public void init() {
		userServ.save(new User("student1", "pass", "ROLE_USER"));
		userServ.save(new User("student2", "pass", "ROLE_USER"));
		userServ.save(new User("teacher", "pass", "ROLE_USER", "ROLE_ADMIN"));
	}

}

