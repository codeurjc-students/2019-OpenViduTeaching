package urjc.ovteaching.rooms;

import java.util.Collection;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
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
	private Set<User> mods;

	@ManyToMany(mappedBy = "participatedRooms")
	private Set<User> participants;
	
	@ManyToMany(mappedBy = "presentedRooms")
	private Set<User> presenters;
	
	public Room(String name) {
		this.mods = new HashSet<>();
		this.participants = new HashSet<>();
		this.presenters = new HashSet<>();
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
	
	public boolean isPresenter(User user) {
		return this.presenters.contains(user);
	}
	
	public boolean canStream(User user) {
		return isModerator(user) || isPresenter(user);
	}
	
	public boolean isInRoom(User user) {
		return isModerator(user) || isParticipant(user) || isPresenter(user);
	}
	
	public Collection<User> getModerators(){
		return this.mods;
	}
	
	public Collection<User> getParticipants(){
		return this.participants;
	}
	
	public Collection<User> getPresenters(){
		return this.presenters;
	}

	public String getName() {
		return name;
	}
}
