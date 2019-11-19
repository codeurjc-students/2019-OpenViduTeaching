package urjc.ovteaching.rooms;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonView;

import urjc.ovteaching.users.User;

@Entity
public class Room {

	public interface NameOnly {}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String codeParticipant;
	private String codeModerator;
	@JsonView(NameOnly.class)
	private String name;

	@ManyToMany(mappedBy = "moddedRooms")
	private List<User> mods;

	@ManyToMany(mappedBy = "participatedRooms")
	private List<User> participants;

	public Room(String name) {
		this.mods = new ArrayList<>();
		this.participants = new ArrayList<>();
		this.codeParticipant = UUID.randomUUID().toString();
		this.codeModerator = UUID.randomUUID().toString();
		this.name = name;
	}

	protected Room() {
	}

	public Long getId() {
		return id;
	}

	public String getParticipantInviteCode() {
		return codeParticipant.toString();
	}

	public String getModeratorInviteCode() {
		return codeModerator.toString();
	}

	public boolean isModerator(User user) {
		return this.mods.contains(user);
	}

	public boolean isParticipant(User user) {
		return this.participants.contains(user);
	}

	public String getName() {
		return name;
	}
}
