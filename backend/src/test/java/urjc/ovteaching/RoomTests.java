package urjc.ovteaching;

import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
import urjc.ovteaching.rooms.RoomController;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserComponent;
import urjc.ovteaching.users.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(roles = {"USER", "ADMIN"})
public class RoomTests {

	@Autowired
	private MockMvc mvc;

	@Spy
	private final RoomController roomController = new RoomController();

	@MockBean
	private UserComponent userComponent;
	
	@MockBean
	private RoomService roomService;
	
	@MockBean
	private UserService userService;
	
	@MockBean
	private JsonReaderService jsonReaderService;

	@Before
	public void initialize() {
		User user = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		Room room = new Room("testRoom");
		user.addModdedRoom(room);
		room.getModerators().add(user);
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);
		
		given(this.roomService.findByName("testRoom")).willReturn(room);
		given(this.roomService.findByName("otherRoom")).willReturn(new Room("otherRoom"));
	}
	
	@Test
	public void createNewRoom() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/newRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.name", is("newRoom")));
	}
	
	@Test
	public void createNewRoomConflict() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
	}
	
	@Test
	public void createNewRoomTemporary() throws Exception {
		User temp = new User("temp", "pass", true, "ROLE_ADMIN", "ROLE_USER");
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(temp);
		given(this.userService.findByName("temp")).willReturn(temp);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/newRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void getInviteCodeModerator() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/inviteCode/moderator")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(this.roomService.findByName("testRoom").getModeratorInviteCode()));
	}
	
	@Test
	public void getInviteCodePresenter() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/inviteCode/presenter")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(this.roomService.findByName("testRoom").getPresenterInviteCode()));
	}
	
	@Test
	public void getInviteCodeParticipant() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/inviteCode/participant")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string(this.roomService.findByName("testRoom").getParticipantInviteCode()));
	}
	
	@Test
	public void getInviteCodeUnauthorized() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/otherRoom/inviteCode/moderator")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void getInviteCodeRoomNotFound() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/inviteCode/moderator")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void getInviteCodeRoleNotFound() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/inviteCode/nonExistant")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void getRoomByName() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("testRoom"));
	}
	
	@Test
	public void getRoomByCode() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		String code = room.getModeratorInviteCode();
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/" + code)
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("testRoom"));
	}
	
	@Test
	public void getRoomNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void logUserInRoomAsParticipant() throws Exception {
		Room room = this.roomService.findByName("otherRoom");
		String code = room.getParticipantInviteCode();
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.name", is("test")))
				.andExpect(jsonPath("$.participatedRooms[0].name", is("otherRoom")));
	}
	
	@Test
	public void logUserInRoomNotFound() throws Exception {
		Room room = this.roomService.findByName("otherRoom");
		String code = room.getParticipantInviteCode();
		given(this.roomService.findByInviteCode(code)).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void logUserInRoomMakePresenter() throws Exception {
		User user = this.userComponent.getLoggedUser();
		Room room = this.roomService.findByName("otherRoom");
		user.addParticipatedRoom(room);
		room.getParticipants().add(user);
		String code = room.getPresenterInviteCode();
		
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.name", is("test")));
		
		verify(roomService).makePresenter(user, room);
	}
	
	@Test
	public void logUserInRoomMakeModerator() throws Exception {
		User user = this.userService.findByName("test");
		Room room = this.roomService.findByName("otherRoom");
		user.addParticipatedRoom(room);
		room.getParticipants().add(user);
		String code = room.getModeratorInviteCode();
		
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.name", is("test")))
				.andExpect(jsonPath("$.roles", hasItem("ROLE_ADMIN")));
		
		verify(roomService).makeModerator(user, room);
	}
	
	@Test
	public void logUserInRoomMakeModeratorAndAdmin() throws Exception {
		User user = new User("testMod", "pass", false, "ROLE_USER");
		Room room = this.roomService.findByName("otherRoom");
		user.addParticipatedRoom(room);
		room.getParticipants().add(user);
		String code = room.getModeratorInviteCode();
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("testMod")).willReturn(user);
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isCreated())
				.andExpect(jsonPath("$.name", is("testMod")))
				.andExpect(jsonPath("$.roles", hasItem("ROLE_ADMIN")));
		
		verify(roomService).makeModerator(user, room);
	}
	
	@Test
	public void logUserInRoomWhenModerator() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		String code = room.getParticipantInviteCode();
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}
	
	@Test
	public void logUserInRoomWhenPresenter() throws Exception {
		User user = this.userComponent.getLoggedUser();
		Room room = new Room("presenterRoom");
		String code = room.getPresenterInviteCode();
		user.addPresentedRoom(room);
		room.getPresenters().add(user);
		
		given(this.roomService.findByName("presenterRoom")).willReturn(room);
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}
	
	@Test
	public void logUserInRoomWhenParticipant() throws Exception {
		//User is presenter
		User user = this.userComponent.getLoggedUser();
		Room room = new Room("presenterRoom");
		String code = room.getParticipantInviteCode();
		user.addPresentedRoom(room);
		room.getPresenters().add(user);
		
		given(this.roomService.findByName("presenterRoom")).willReturn(room);
		given(this.roomService.findByInviteCode(code)).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		//User is participant
		Room room2 = new Room("participantRoom");
		String code2 = room2.getParticipantInviteCode();
		user.addParticipatedRoom(room2);
		room2.getParticipants().add(user);
		
		given(this.roomService.findByName("participantRoom")).willReturn(room2);
		given(this.roomService.findByInviteCode(code2)).willReturn(room2);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code2 + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}
	
	@Test
	public void logUserInRoomTemporaryInAnotherRoom() throws Exception {
		User temp = new User("temp", "pass", true, "ROLE_ADMIN", "ROLE_USER");
		Room room = this.roomService.findByName("testRoom");
		temp.addModdedRoom(room);
		room.getModerators().add(temp);
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(temp);
		given(this.userService.findByName("temp")).willReturn(temp);
		
		Room otherRoom = this.roomService.findByName("otherRoom");
		String code = otherRoom.getParticipantInviteCode();
		given(this.roomService.findByInviteCode(code)).willReturn(otherRoom);
		
		mvc.perform(MockMvcRequestBuilders.put("/ovTeachingApi/room/" + code + "/user")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void getAssistants() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		User presenter = new User("testPresenter", "pass", false, "ROLE_USER");
		presenter.addPresentedRoom(room);
		room.getPresenters().add(presenter);
		User participant = new User("testParticipant", "pass", false, "ROLE_USER");
		participant.addParticipatedRoom(room);
		room.getParticipants().add(participant);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/assistants")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.participants", hasSize(1)))
				.andExpect(jsonPath("$.participants[0].connected", is(false)))
				.andExpect(jsonPath("$.participants[0].name", is("testParticipant")))
				.andExpect(jsonPath("$.presenters", hasSize(1)))
				.andExpect(jsonPath("$.presenters[0].connected", is(false)))
				.andExpect(jsonPath("$.presenters[0].name", is("testPresenter")))
				.andExpect(jsonPath("$.moderators", hasSize(1)))
				.andExpect(jsonPath("$.moderators[0].connected", is(false)))
				.andExpect(jsonPath("$.moderators[0].name", is("test")));
	}
	
	@Test
	public void getAssistantsNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/assistants")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void getAssistantsUnauthorized() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/otherRoom/assistants")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void raiseHand() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("1"));
		
		verify(roomService, times(1)).checkConnectedHandRaisedUsers(this.roomService.findByName("testRoom"));
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test2\",\"avatar\": \"testAvatar2\",\"connectionId\": \"con_test2\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("2"));
		
		verify(roomService, times(2)).checkConnectedHandRaisedUsers(this.roomService.findByName("testRoom"));
	}
	
	@Test
	public void raiseHandNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/nonExistant/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void raiseHandTwice() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON));
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
	}
	
	@Test
	public void raiseHandUnauthorized() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/otherRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void lowerHand() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON));
		
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
	}
	
	@Test
	public void lowerHandNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/nonExistant/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void lowerHandBeforeRaising() throws Exception {
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
	}
	
	@Test
	public void lowerHandUnauthorized() throws Exception {
		mvc.perform(MockMvcRequestBuilders.delete("/ovTeachingApi/room/otherRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void getHandRaisedUsers() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/raiseHand")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(0)));
		
		verify(roomService, times(1)).checkConnectedHandRaisedUsers(this.roomService.findByName("testRoom"));
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/raiseHand")
				.content("{\"nickname\": \"test\",\"avatar\": \"testAvatar\",\"connectionId\": \"con_test\"}")
				.contentType(MediaType.APPLICATION_JSON));
		
		verify(roomService, times(2)).checkConnectedHandRaisedUsers(this.roomService.findByName("testRoom"));

		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/raiseHand")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$", hasSize(1)))
				.andExpect(jsonPath("$[0].nickname", is("test")))
				.andExpect(jsonPath("$[0].avatar", is("testAvatar")))
				.andExpect(jsonPath("$[0].connectionId", is("con_test")));
		
		verify(roomService, times(3)).checkConnectedHandRaisedUsers(this.roomService.findByName("testRoom"));
	}
	
	@Test
	public void getHandRaisedUsersNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/raiseHand")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
	}
	
	@Test
	public void getHandRaisedUsersUnauthorized() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/otherRoom/raiseHand")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
	}
	
	@Test
	public void createRooms() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/rooms")
				.content("{" + 
						"    \"rooms\": [" + 
						"        {" + 
						"            \"name\": \"roomA\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"roomB\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(jsonReaderService).readRooms(any());
	}
	
	@Test
	public void createRoomsJsonReaderException() throws Exception {
		Mockito.doThrow(new JsonReaderException(new Exception())).when(jsonReaderService).readRooms(any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/rooms")
				.content("{" + 
						"    \"rooms\": [" + 
						"        {" + 
						"            \"name\": \"roomA\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"roomB\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
		
		verify(jsonReaderService).readRooms(any());
	}
	
	@Test
	public void createRoomsParseException() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/rooms")
				.content("{")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
		
		verify(jsonReaderService, never()).readRooms(any());
	}
	
	@Test
	public void createRoomsConflictDatabaseException() throws Exception {
		Mockito.doThrow(new ConflictDatabaseException("roomA", "Room")).when(jsonReaderService).readRooms(any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/rooms")
				.content("{" + 
						"    \"rooms\": [" + 
						"        {" + 
						"            \"name\": \"roomA\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"roomB\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict())
				.andExpect(content().string("Room \"roomA\" already found in the database"));
		
		verify(jsonReaderService).readRooms(any());
	}
	
	@Test
	public void createRoomsTemporaryUser() throws Exception {
		User temp = new User("temp", "pass", true, "ROLE_ADMIN", "ROLE_USER");
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(temp);
		given(this.userService.findByName("temp")).willReturn(temp);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/rooms")
				.content("{" + 
						"    \"rooms\": [" + 
						"        {" + 
						"            \"name\": \"roomA\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"roomB\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(jsonReaderService, never()).readRooms(any());
	}
	
	@Test
	public void addUsersToRoom() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/users")
				.content("{" + 
						"    \"participants\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(jsonReaderService).readUsersToRoom(any(), any());
	}
	
	@Test
	public void addUsersToRoomParseException() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/users")
				.content("{")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
		
		verify(jsonReaderService, never()).readUsersToRoom(any(), any());
	}
	
	@Test
	public void addUsersToRoomNotFoundException() throws Exception {
		Mockito.doThrow(new NotFoundDatabaseException("testRoom", "participant1")).when(jsonReaderService).readUsersToRoom(any(), any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/users")
				.content("{" + 
						"    \"participants\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound())
				.andExpect(content().string("User: participant1 not found"));
		
		verify(jsonReaderService).readUsersToRoom(any(), any());
	}
	
	@Test
	public void addUsersToRoomTemporaryUserException() throws Exception {
		Mockito.doThrow(new TemporaryUserException("participant1")).when(jsonReaderService).readUsersToRoom(any(), any());
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/users")
				.content("{" + 
						"    \"participants\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict())
				.andExpect(content().string("User: participant1 was created temporarily and cannot be added to more than one room"));
		
		verify(jsonReaderService).readUsersToRoom(any(), any());
	}
	
	@Test
	public void addUsersToRoomNotFound() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/nonExistant/users")
				.content("{" + 
						"    \"participants\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(jsonReaderService, never()).readUsersToRoom(any(), any());
	}
	
	@Test
	public void addUsersToRoomTemporaryUser() throws Exception {
		User temp = new User("temp", "pass", true, "ROLE_ADMIN", "ROLE_USER");
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(temp);
		given(this.userService.findByName("temp")).willReturn(temp);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/users")
				.content("{" + 
						"    \"participants\": [" + 
						"        {" + 
						"            \"name\": \"participant1\"" + 
						"        }," + 
						"        {" + 
						"            \"name\": \"participant2\"" + 
						"        }" + 
						"    ]" + 
						"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(jsonReaderService, never()).readUsersToRoom(any(), any());
	}
}