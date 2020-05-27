package urjc.ovteaching;

import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;

import javax.xml.ws.http.HTTPException;

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

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import urjc.ovteaching.openvidu.OpenViduComponent;
import urjc.ovteaching.openvidu.OpenViduController;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserComponent;
import urjc.ovteaching.users.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(roles = {"USER", "ADMIN"})
public class OpenViduTests {

	@Autowired
	private MockMvc mvc;

	@Spy
	private final OpenViduController recordingController = new OpenViduController();

	@MockBean
	private UserComponent userComponent;
	
	@MockBean
	private OpenViduComponent openviduComponent;
	
	@MockBean
	private RoomService roomService;
	
	@MockBean
	private UserService userService;  

	@Before
	public void initialize() {
		User user = new User("test", "pass", "ROLE_ADMIN", "ROLE_USER");
		Room room = new Room("testRoom");
		user.addModdedRoom(room);
		room.getModerators().add(user);
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);
		given(this.roomService.findByName("testRoom")).willReturn(room);
	}
	
	@Test
	public void createSession() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(false);
		given(this.openviduComponent.createSession(room)).willReturn("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/session")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated());
		
		verify(openviduComponent).createSession(room);
	}
	
	@Test
	public void createSessionAlreadyCreated() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.getSession(room)).willReturn("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/session")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).getSession(room);
	}
	
	@Test
	public void createSessionNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/nonExistant/session")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).createSession(any());
	}
	
	@Test
	public void createSessionUnauthorized() throws Exception {
		Room room = new Room("otherRoom");
		given(this.roomService.findByName("otherRoom")).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/otherRoom/session")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).createSession(any());
	}
	
	@Test
	public void createSessionOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(false);
		Mockito.doThrow(new IOException()).when(openviduComponent).createSession(room);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/session")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).createSession(room);
	}
	
	@Test
	public void getToken() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		String token = "testToken";
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.generateToken(room, user)).willReturn(token);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(token));
		
		verify(openviduComponent, never()).createSession(any());
		verify(openviduComponent).generateToken(room, user);
		verify(openviduComponent).addUserWithTokenToRoom(room, user, token);
	}
	
	@Test
	public void getTokenUnauthorized() throws Exception {
		Room room = new Room("otherRoom");
		given(this.roomService.findByName("otherRoom")).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/otherRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).generateToken(any(), any());
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
	}
	
	@Test
	public void getTokenNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).generateToken(any(), any());
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
	}
	
	@Test
	public void getTokenAndCreateSession() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		String token = "testToken";
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(false);
		given(this.openviduComponent.generateToken(room, user)).willReturn(token);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(token));
		
		verify(openviduComponent).createSession(room);
		verify(openviduComponent).generateToken(room, user);
		verify(openviduComponent).addUserWithTokenToRoom(room, user, token);
	}
	
	@Test
	public void getTokenAndCreateSessionOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(false);
		Mockito.doThrow(new IOException()).when(openviduComponent).createSession(room);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).createSession(room);
		verify(openviduComponent, never()).generateToken(any(), any());
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
	}
	
	@Test
	public void getTokenOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		
		//IOException
		Mockito.doThrow(new IOException()).when(openviduComponent).generateToken(room, user);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent, times(1)).generateToken(room, user);
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
		
		//HTTPException (not 404)
		Mockito.doThrow(new HTTPException(400)).when(openviduComponent).generateToken(room, user);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent, times(2)).generateToken(room, user);
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
	}
	
	@Test
	public void getTokenUserLeftUnexpectedly() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		String token = "testToken";
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		Mockito.doThrow(new HTTPException(404)).when(openviduComponent).generateToken(room, user);
		given(this.openviduComponent.replaceSession(room, user)).willReturn(token);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(token));
		
		verify(openviduComponent).generateToken(room, user);
		verify(openviduComponent).replaceSession(room, user);
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
	}
	
	@Test
	public void getTokenUserLeftUnexpectedlyOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		Mockito.doThrow(new HTTPException(404)).when(openviduComponent).generateToken(room, user);
		Mockito.doThrow(new IOException()).when(openviduComponent).replaceSession(room, user);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/token")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).generateToken(room, user);
		verify(openviduComponent).replaceSession(room, user);
		verify(openviduComponent, never()).addUserWithTokenToRoom(any(), any(), any());
	}
	
	@Test
	public void removeUser() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.removeUser(room, user)).willReturn(new String[] {"testToken", "testCamToken"});
		given(this.openviduComponent.isSessionEmpty(room)).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/testRoom/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).removeUser(room, user);
		verify(openviduComponent, never()).removeSession(any());
		verify(roomService).checkConnectedHandRaisedUsers(room);
	}
	
	@Test
	public void removeUserNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/nonExistant/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).removeUser(any(), any());
		verify(openviduComponent, never()).removeSession(any());
		verify(roomService, never()).checkConnectedHandRaisedUsers(any());
	}
	
	@Test
	public void removeUserUnauthorized() throws Exception {
		Room room = new Room("otherRoom");
		given(this.roomService.findByName("otherRoom")).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/otherRoom/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).removeUser(any(), any());
		verify(openviduComponent, never()).removeSession(any());
		verify(roomService, never()).checkConnectedHandRaisedUsers(any());
	}
	
	@Test
	public void removeUserNoSession() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/testRoom/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
		
		verify(openviduComponent, never()).removeUser(any(), any());
		verify(openviduComponent, never()).removeSession(any());
		verify(roomService, never()).checkConnectedHandRaisedUsers(any());
	}
	
	@Test
	public void removeUserAndSession() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.removeUser(room, user)).willReturn(new String[] {"testToken", "testCamToken"});
		given(this.openviduComponent.isSessionEmpty(room)).willReturn(true);
		
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/testRoom/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).removeUser(room, user);
		verify(openviduComponent).removeSession(room);
		verify(roomService).checkConnectedHandRaisedUsers(room);
	}
	
	@Test
	public void removeUserInvalidToken() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User user = this.userComponent.getLoggedUser();
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.removeUser(room, user)).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/testRoom/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).removeUser(room, user);
		verify(openviduComponent, never()).isSessionEmpty(room);
		verify(openviduComponent, never()).removeSession(room);
	}
	
	@Test
	public void sendSignal() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.isSessionEmpty(room)).willReturn(false);
		
		JsonArray to = new JsonArray();
		to.add("testConnection");
		JsonObject data = new JsonObject();
		data.addProperty("testProperty", "testValue");
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/signal/testType")
				.content("{\"to\": [\"testConnection\"],\"data\": { \"testProperty\": \"testValue\"}}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).sendSignal(room, to, "testType", data);
	}
	
	@Test
	public void sendSignalNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/nonExistant/signal/testType")
				.content("{\"to\": [\"testConnection\"],\"data\": { \"testProperty\": \"testValue\"}}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).sendSignal(any(), any(), any(), any());
	}
	
	@Test
	public void sendSignalOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.isSessionEmpty(room)).willReturn(false);
		
		JsonArray to = new JsonArray();
		to.add("testConnection");
		JsonObject data = new JsonObject();
		data.addProperty("testProperty", "testValue");
		
		Mockito.doThrow(new IOException()).when(openviduComponent).sendSignal(room, to, "testType", data);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/signal/testType")
				.content("{\"to\": [\"testConnection\"],\"data\": { \"testProperty\": \"testValue\"}}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).sendSignal(room, to, "testType", data);
	}
	
	@Test
	public void sendSignalUnauthorized() throws Exception {		
		User user = this.userComponent.getLoggedUser();
		Room room = new Room("presentedRoom");
		user.addPresentedRoom(room);
		room.getPresenters().add(user);
		
		given(this.roomService.findByName("presentedRoom")).willReturn(room);
		given(this.openviduComponent.isSessionCreated(room)).willReturn(true);
		given(this.openviduComponent.isSessionEmpty(room)).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/presentedRoom/signal/testType")
				.content("{\"to\": [\"testConnection\"],\"data\": { \"testProperty\": \"testValue\"}}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).sendSignal(any(), any(), any(), any());
	}
	
	@Test
	public void sendSignalNoSession() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		
		given(this.openviduComponent.isSessionCreated(room)).willReturn(false);
		given(this.openviduComponent.isSessionEmpty(room)).willReturn(true);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/signal/testType")
				.content("{\"to\": [\"testConnection\"],\"data\": { \"testProperty\": \"testValue\"}}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
		
		verify(openviduComponent, never()).sendSignal(any(), any(), any(), any());
	}
}
