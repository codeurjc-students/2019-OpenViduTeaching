package urjc.ovteaching.rooms;

import java.util.Collection;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;

import org.json.simple.JSONObject;

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
	private String codePresenter;
	@JsonView(NameOnly.class)
	private String name;
	@Lob
	@ElementCollection
	private List<JSONObject> handRaisedUsers;

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
		this.codePresenter = UUID.randomUUID().toString();
		this.handRaisedUsers = new LinkedList<>();
		this.name = name;
	}

	protected Room() {
	}

	public Long getId() {
		return id;
	}

	public String getParticipantInviteCode() {
		return codeParticipant;
	}

	public String getModeratorInviteCode() {
		return codeModerator;
	}

	public String getPresenterInviteCode() {
		return codePresenter;
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

	public int addHandRaisedUser(JSONObject handRaisedUser) {
		if(this.handRaisedUsers.contains(handRaisedUser)) {
			return -1;
		} else {
			this.handRaisedUsers.add(handRaisedUser);
			return this.handRaisedUsers.size();
		}
	}
	
	public boolean removeHandRaisedUser(JSONObject connectionId) {
		for(JSONObject jsonUser : this.handRaisedUsers) {
			if(jsonUser.get("connectionId").equals(connectionId.get("connectionId"))) {
				this.handRaisedUsers.remove(jsonUser);
				return true;
			}
		}
		return false;
	}

	public List<JSONObject> getHandRaisedUsers() {
		return handRaisedUsers;
	}
}
