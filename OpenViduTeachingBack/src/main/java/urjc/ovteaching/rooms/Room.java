package urjc.ovteaching.rooms;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;

import urjc.ovteaching.users.User;

@Entity
public class Room {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private UUID uuidParticipant;
	private UUID uuidModerator;
	private String name;
	
	@JsonIgnore
	private List<User> mods;
	
	public Room(User mod, String name) {
		this.mods = new ArrayList<>();
		mods.add(mod);
		this.uuidParticipant = UUID.randomUUID();
		this.uuidModerator = UUID.randomUUID();
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public String getParticipantInviteCode() {
		return uuidParticipant.toString();
	}
	
	public String getModeratorInviteCode() {
		return uuidModerator.toString();
	}

	public boolean isModerator(User user) {
		return this.mods.contains(user);
	}

	public void addModerator(User mod) {
		this.mods.add(mod);
	}

	public String getName() {
		return name;
	}
}
