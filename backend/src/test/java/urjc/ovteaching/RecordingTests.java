package urjc.ovteaching;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;

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

import urjc.ovteaching.openvidu.OpenViduComponent;
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
public class RecordingTests {

	@Autowired
	private MockMvc mvc;

	@Spy
	private final RoomController roomController = new RoomController();

	@MockBean
	private UserComponent userComponent;
	
	@MockBean
	private OpenViduComponent openviduComponent;
	
	@MockBean
	private RoomService roomService;
	
	@MockBean
	private UserService userService;  

	@MockBean
	private HttpServletRequest request;

	@Before
	public void initialize() {
		User user = new User("test", "pass", "ROLE_ADMIN", "ROLE_USER");
		Room room = new Room("testRoom");
		user.addModdedRoom(room);
		room.getModerators().add(user);
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.roomService.findByName("testRoom")).willReturn(room);
		given(this.openviduComponent.isRecordingEnabled()).willReturn(true);
		given(this.openviduComponent.isSessionCreated(any())).willReturn(true);
		given(this.openviduComponent.isSessionEmpty(any())).willReturn(false);
	}
	
	@Test
	public void startRecording() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(false);
		given(this.openviduComponent.startRecording(room)).willReturn("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).startRecording(room);
	}
	
	@Test
	public void startRecordingUnauthorized() throws Exception {
		User user = this.userComponent.getLoggedUser();
		Room room = new Room("presentedRoom");
		user.addPresentedRoom(room);
		room.getPresenters().add(user);
		
		given(this.roomService.findByName("presentedRoom")).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/presentedRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).startRecording(room);
	}
	
	@Test
	public void startRecordingAlreadyStarted() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(true);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
		
		verify(openviduComponent, never()).startRecording(room);
	}
	
	@Test
	public void startRecordingOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(false);
		given(this.openviduComponent.startRecording(room)).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).startRecording(room);
	}
	
	@Test
	public void stopRecording() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(true);
		given(this.openviduComponent.stopRecording(room)).willReturn("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/stop")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).stopRecording(room);
	}
	
	@Test
	public void stopRecordingUnauthorized() throws Exception {
		User user = this.userComponent.getLoggedUser();
		Room room = new Room("presentedRoom");
		user.addPresentedRoom(room);
		room.getPresenters().add(user);
		
		given(this.roomService.findByName("presentedRoom")).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/presentedRoom/recording/stop")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).stopRecording(room);
	}
	
	@Test
	public void stopRecordingNotStarted() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/stop")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
		
		verify(openviduComponent, never()).stopRecording(room);
	}
	
	@Test
	public void stopRecordingOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(true);
		given(this.openviduComponent.stopRecording(room)).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/stop")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).stopRecording(room);
	}
	
	@Test
	public void isBeingRecorded() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(true);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/isBeingRecorded")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("true"));
		
		verify(openviduComponent).isBeingRecorded(room);
	}
	
	@Test
	public void isNotBeingRecorded() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/isBeingRecorded")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("false"));
		
		verify(openviduComponent).isBeingRecorded(room);
	}
	
	@Test
	public void isBeingRecordedUnauthorized() throws Exception {
		User user = this.userComponent.getLoggedUser();
		Room room = new Room("presentedRoom");
		user.addPresentedRoom(room);
		room.getPresenters().add(user);
		
		given(this.roomService.findByName("presentedRoom")).willReturn(room);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/presentedRoom/recording/isBeingRecorded")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).isBeingRecorded(room);
	}
	
	@Test
	public void getRecordings() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.getRecordings(room)).willReturn(new ArrayList<>());
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recordings")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray());
		
		verify(openviduComponent).getRecordings(room);
	}
	
	@Test
	public void getRecordingsOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.getRecordings(room)).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recordings")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).getRecordings(room);
	}
	
	@Test
	public void getVideo() throws Exception {
		given(this.openviduComponent.getVideo("testRoom")).willReturn(new byte[] {1, 2, 3});
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().bytes(new byte[] {1, 2, 3}));
		
		verify(openviduComponent).getVideo("testRoom");
	}
	
	@Test
	public void getVideoNotFound() throws Exception {
		Mockito.doThrow(new IOException()).when(openviduComponent).getVideo("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent).getVideo("testRoom");
	}
}
