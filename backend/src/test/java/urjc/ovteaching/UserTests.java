package urjc.ovteaching;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import urjc.ovteaching.jsonReader.ConflictDatabaseException;
import urjc.ovteaching.jsonReader.JsonReaderException;
import urjc.ovteaching.jsonReader.JsonReaderService;
import urjc.ovteaching.jsonReader.NotFoundDatabaseException;
import urjc.ovteaching.jsonReader.TemporaryUserException;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserComponent;
import urjc.ovteaching.users.UserController;
import urjc.ovteaching.users.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(roles = {"USER", "ADMIN"})
public class UserTests {

	@Autowired
	private MockMvc mvc;

	@Spy
	private final UserController userController = new UserController();

	@MockBean
	private UserComponent userComponent;

	@MockBean
	private UserService userService;
	
	@MockBean
	private JsonReaderService jsonReaderService;

	@Before
	public void initialize() {
		User user1 = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		User user2 = new User("test2", "pass", false, "ROLE_USER");
		List<User> l = new ArrayList<>();
		l.add(user2);
		l.add(user1);

		given(this.userService.findAll()).willReturn(l);
		given(this.userService.findByName("new")).willReturn(null);
		given(this.userService.findByName("test")).willReturn(user1);

		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user1);
	}

	@Test
	public void testLogIn() throws Exception {
		User user = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);

		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/logIn")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name", is("test")));
	}

	@Test
	public void testLogInUnauthorized() throws Exception {
		given(this.userComponent.isLoggedUser()).willReturn(false);

		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/logIn")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}

	@Test
	public void testLogOut() throws Exception {
		User user = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);

		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/logOut")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("true"));
	}

	@Test
	public void testLogOutUnauthorized() throws Exception {
		given(this.userComponent.isLoggedUser()).willReturn(false);

		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/logOut")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void testLogOutTemporary() throws Exception {
		User user = new User("test", "pass", true, "ROLE_ADMIN", "ROLE_USER");
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);

		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/logOut")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("true"));
		
		verify(userService).delete(user);
	}

	@Test
	public void testRegister() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/register/new/pass")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}

	@Test
	public void testRegisterConflict() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/register/test/pass")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
	}

	@Test
	public void testUsernameTaken() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/user/test")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("test"));
	}
	
	@Test
	public void testUsernameNotTaken() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/user/new")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void getUserRooms() throws Exception {
		User user = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		user.addModdedRoom(new Room("roomTest1"));
		user.addModdedRoom(new Room("roomTest2"));
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/user/rooms")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.modded", hasSize(2)))
				.andExpect(jsonPath("$.modded[0].name", is("roomTest1")))
				.andExpect(jsonPath("$.modded[1].name", is("roomTest2")))
				.andExpect(jsonPath("$.presented", hasSize(0)))
				.andExpect(jsonPath("$.participated", hasSize(0)));
	}
	
	@Test
	public void getUserRoomsNotFound() throws Exception {
		User user = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		user.addModdedRoom(new Room("roomTest1"));
		user.addModdedRoom(new Room("roomTest2"));
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/user/rooms")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void createUsers() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{" + 
						"    \"users\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomA\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"moderator\"," + 
						"            \"password\": \"pass\"," + 
						"            \"moddedRooms\": [" + 
						"                \"roomA\"," + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(jsonReaderService).readUsers(any());
	}
	
	@Test
	public void createUsersJsonReaderException() throws Exception {		
		Mockito.doThrow(new JsonReaderException(new Exception())).when(jsonReaderService).readUsers(any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{" + 
						"    \"users\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomA\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"moderator\"," + 
						"            \"password\": \"pass\"," + 
						"            \"moddedRooms\": [" + 
						"                \"roomA\"," + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
		
		verify(jsonReaderService).readUsers(any());
	}
	
	@Test
	public void createUsersParseException() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
		
		verify(jsonReaderService, never()).readUsers(any());
	}
	
	@Test
	public void createUsersNotFoundException() throws Exception {		
		Mockito.doThrow(new NotFoundDatabaseException("roomA","participant1")).when(jsonReaderService).readUsers(any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{" + 
						"    \"users\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomA\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"moderator\"," + 
						"            \"password\": \"pass\"," + 
						"            \"moddedRooms\": [" + 
						"                \"roomA\"," + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound())
				.andExpect(content().string("Room not found: roomA for user: participant1"));
		
		verify(jsonReaderService).readUsers(any());
	}
	
	@Test
	public void createUsersConflictException() throws Exception {		
		Mockito.doThrow(new ConflictDatabaseException("participant1", "User")).when(jsonReaderService).readUsers(any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{" + 
						"    \"users\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomA\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"moderator\"," + 
						"            \"password\": \"pass\"," + 
						"            \"moddedRooms\": [" + 
						"                \"roomA\"," + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict())
				.andExpect(content().string("User \"participant1\" already found in the database"));
		
		verify(jsonReaderService).readUsers(any());
	}
	
	@Test
	public void createUsersTemporaryUserException() throws Exception {		
		Mockito.doThrow(new TemporaryUserException("participant1")).when(jsonReaderService).readUsers(any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{" + 
						"    \"users\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomA\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"moderator\"," + 
						"            \"password\": \"pass\"," + 
						"            \"moddedRooms\": [" + 
						"                \"roomA\"," + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict())
				.andExpect(content().string("User: participant1 was created temporarily and cannot be added to more than one room"));
		
		verify(jsonReaderService).readUsers(any());
	}
	
	@Test
	public void createUsersTemporaryUnauthorized() throws Exception {		
		User temp = new User("temp", "pass", true, "ROLE_ADMIN", "ROLE_USER");
		given(this.userService.findByName("temp")).willReturn(temp);
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(temp);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/users")
				.content("{" + 
						"    \"users\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomA\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"," + 
						"            \"password\": \"pass\"," + 
						"            \"participatedRooms\": [" + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"moderator\"," + 
						"            \"password\": \"pass\"," + 
						"            \"moddedRooms\": [" + 
						"                \"roomA\"," + 
						"                \"roomB\"" + 
						"            ]" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(jsonReaderService, never()).readUsers(any());
	}
}
