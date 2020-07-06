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

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.google.common.io.ByteStreams;

import urjc.ovteaching.openvidu.OpenViduComponent;
import urjc.ovteaching.openvidu.RecordingController;
import urjc.ovteaching.rooms.Room;
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
	
	@Autowired
    ResourceLoader resourceLoader;

	@Spy
	private final RecordingController recordingController = new RecordingController();

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
		User user = new User("test", "pass", false, "ROLE_ADMIN", "ROLE_USER");
		Room room = new Room("testRoom");
		user.addModdedRoom(room);
		room.getModerators().add(user);
		
		given(this.userComponent.isLoggedUser()).willReturn(true);
		given(this.userComponent.getLoggedUser()).willReturn(user);
		given(this.userService.findByName("test")).willReturn(user);
		given(this.roomService.findByName("testRoom")).willReturn(room);
		given(this.openviduComponent.isRecordingEnabled()).willReturn(true);
		given(this.openviduComponent.isSessionCreated(any())).willReturn(true);
		given(this.openviduComponent.isSessionEmpty(any())).willReturn(false);
	}
	
	@Test
	public void startRecording() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(false);
		given(this.openviduComponent.startRecording(room, null)).willReturn("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());
		
		verify(openviduComponent).startRecording(room, null);
	}
	
	@Test
	public void startRecordingNotEnabled() throws Exception {
		given(this.openviduComponent.isRecordingEnabled()).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotImplemented());
		
		verify(openviduComponent, never()).startRecording(any(), any());
	}
	
	@Test
	public void startRecordingNotFound() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/nonExistant/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).startRecording(any(), any());
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
		
		verify(openviduComponent, never()).startRecording(room, null);
	}
	
	@Test
	public void startRecordingAlreadyStarted() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(true);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isConflict());
		
		verify(openviduComponent, never()).startRecording(room, null);
	}
	
	@Test
	public void startRecordingOpenViduError() throws Exception {
		Room room = this.roomService.findByName("testRoom");
		given(this.openviduComponent.isBeingRecorded(room)).willReturn(false);
		given(this.openviduComponent.startRecording(room, null)).willReturn(null);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/start")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isInternalServerError());
		
		verify(openviduComponent).startRecording(room, null);
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
	public void stopRecordingNotEnabled() throws Exception {
		given(this.openviduComponent.isRecordingEnabled()).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/testRoom/recording/stop")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotImplemented());
		
		verify(openviduComponent, never()).stopRecording(any());
	}
	
	@Test
	public void stopRecordingNotFound() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.post("/ovTeachingApi/room/nonExistant/recording/stop")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).stopRecording(any());
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
	public void isBeingRecordedNotEnabled() throws Exception {
		given(this.openviduComponent.isRecordingEnabled()).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/isBeingRecorded")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotImplemented());
		
		verify(openviduComponent, never()).isBeingRecorded(any());
	}
	
	@Test
	public void isBeingRecordedNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/recording/isBeingRecorded")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).isBeingRecorded(any());
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
	public void isRecordingEnabled() throws Exception {		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/isRecordingEnabled")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("true"));
		
		verify(openviduComponent).isRecordingEnabled();
	}
	
	@Test
	public void isRecordingNotEnabled() throws Exception {
		given(this.openviduComponent.isRecordingEnabled()).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/isRecordingEnabled")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().string("false"));
		
		verify(openviduComponent).isRecordingEnabled();
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
	public void getRecordingsNotEnabled() throws Exception {
		given(this.openviduComponent.isRecordingEnabled()).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recordings")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotImplemented());
		
		verify(openviduComponent, never()).getRecordings(any());
	}
	
	@Test
	public void getRecordingsNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/recordings")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).getRecordings(any());
	}
	
	@Test
	public void getRecordingsUnauthorized() throws Exception {
		Room room = new Room("otherRoom");
		given(this.roomService.findByName("otherRoom")).willReturn(room);
		given(this.openviduComponent.getRecordings(room)).willReturn(new ArrayList<>());
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/otherRoom/recordings")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).getRecordings(any());
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
		given(this.openviduComponent.getVideo("testRoom")).willReturn(resourceLoader.getResource("classpath:json/initialData.json"));
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(content().contentType("video/mp4"))
				.andExpect(content().bytes(ByteStreams.toByteArray(resourceLoader.getResource("classpath:json/initialData.json").getInputStream())));
		
		verify(openviduComponent).getVideo("testRoom");
	}
	
	@Test
	public void getVideoNotEnabled() throws Exception {
		given(this.openviduComponent.isRecordingEnabled()).willReturn(false);
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotImplemented());
		
		verify(openviduComponent, never()).getVideo(any());
	}
	
	@Test
	public void getVideoRoomNotFound() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/nonExistant/recording/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent, never()).getVideo(any());
	}
	
	@Test
	public void getVideoNotFound() throws Exception {
		Mockito.doThrow(new IOException()).when(openviduComponent).getVideo("testRoom");
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/testRoom/recording/testRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isNotFound());
		
		verify(openviduComponent).getVideo("testRoom");
	}
	
	@Test
	public void getVideoUnauthorized() throws Exception {
		Room room = new Room("otherRoom");
		given(this.roomService.findByName("otherRoom")).willReturn(room);
		given(this.openviduComponent.getRecordings(room)).willReturn(new ArrayList<>());
		
		mvc.perform(MockMvcRequestBuilders.get("/ovTeachingApi/room/otherRoom/recording/otherRoom")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isUnauthorized());
		
		verify(openviduComponent, never()).getVideo(any());
	}
}
