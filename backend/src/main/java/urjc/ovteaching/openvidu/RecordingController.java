package urjc.ovteaching.openvidu;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.openvidu.java.client.Recording;
import urjc.ovteaching.rooms.Room;
import urjc.ovteaching.rooms.RoomService;
import urjc.ovteaching.users.User;
import urjc.ovteaching.users.UserComponent;
import urjc.ovteaching.users.UserService;

@RequestMapping("/ovTeachingApi")
@CrossOrigin
@RestController
public class RecordingController {
	
	@Autowired
	private RoomService roomServ;
	
	@Autowired
	private UserService userServ;

	@Autowired
	private UserComponent userComponent;

	@Autowired
	private OpenViduComponent openViduComponent;
	
	/**
	 * Starts recording of a session
	 * 
	 * @return Recording id
	 */
	@PostMapping("/room/{roomName}/recording/start")
	public ResponseEntity<?> startRecording(@PathVariable String roomName, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isModerator(user)) { // User not a mod of that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if(!this.openViduComponent.isRecordingEnabled()) {
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
		if (!this.openViduComponent.isSessionCreated(room) || this.openViduComponent.isSessionEmpty(room) || this.openViduComponent.isBeingRecorded(room)) {
			// No session created for that room or it is empty or it is already being recorded
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
		String recordingId = this.openViduComponent.startRecording(room);
		if(recordingId==null) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Stops recording of a session
	 * 
	 * @return HttpStatus of the operation
	 */
	@PostMapping("/room/{roomName}/recording/stop")
	public ResponseEntity<?> stopRecording(@PathVariable String roomName, HttpServletRequest request) {
		if (!request.isUserInRole("USER")) { // User not logged
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isModerator(user)) { // User not a mod of that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if(!this.openViduComponent.isRecordingEnabled()) {
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
		if (!this.openViduComponent.isSessionCreated(room) || this.openViduComponent.isSessionEmpty(room) || !this.openViduComponent.isBeingRecorded(room)) {
			// No session created for that room or it is empty or it is not being recorded
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
		String recordingId = this.openViduComponent.stopRecording(room);
		if(recordingId==null) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	/**
	 * Returns whether a session is being recorded or not
	 * 
	 * @return boolean with the status of the recording
	 */
	@GetMapping("/room/{roomName}/recording/isBeingRecorded")
	public ResponseEntity<Boolean> isBeingRecorded(@PathVariable String roomName, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isModerator(user)) { // User not a mod of that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if(!this.openViduComponent.isRecordingEnabled()) {
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
		return new ResponseEntity<>(this.openViduComponent.isSessionCreated(room) && !this.openViduComponent.isSessionEmpty(room) && this.openViduComponent.isBeingRecorded(room), HttpStatus.OK);
	}

	/**
	 * Get a list of recordings of a room
	 * 
	 * @return the list of recordings
	 */
	@GetMapping("/room/{roomName}/recordings")
	public ResponseEntity<List<Recording>> getRecordings(@PathVariable String roomName, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isInRoom(user)) { // User not in that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if(!this.openViduComponent.isRecordingEnabled()) {
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
		List<Recording> recordings = this.openViduComponent.getRecordings(room);
		if(recordings==null) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(recordings, HttpStatus.OK);
	}
	
	/**
	 * Get a video from a room
	 * 
	 * @return the video in byte array
	 */
	@GetMapping("/room/{roomName}/recording/{video}")
	public ResponseEntity<byte[]> getVideo(@PathVariable String roomName, @PathVariable String video, HttpServletRequest request) {
		Room room = roomServ.findByName(roomName);
		User user = userServ.findByName(this.userComponent.getLoggedUser().getName());

		if (room == null) { // No room with that name
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if (!room.isInRoom(user)) { // User not in that room
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		if(!this.openViduComponent.isRecordingEnabled()) {
			return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
		}
		try {
			byte[] bytes = this.openViduComponent.getVideo(video);			
			return new ResponseEntity<>(bytes, new HttpHeaders(), HttpStatus.OK);
		} catch(IOException e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
