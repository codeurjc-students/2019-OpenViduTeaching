package urjc.ovteaching.users;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonView;

import urjc.ovteaching.rooms.Room;

@Entity
public class User {

	public interface WithRooms extends Room.NameOnly {}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@JsonView(WithRooms.class)
	private String name;
	private String passwordHash;
	@JsonView(WithRooms.class)
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;

	@JsonView(WithRooms.class)
	@ManyToMany
	private List<Room> moddedRooms;

	@JsonView(WithRooms.class)
	@ManyToMany
	private List<Room> participatedRooms;

	public User(String name, String password, String... roles) {
		this.name = name;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.moddedRooms = new ArrayList<>();
		this.participatedRooms = new ArrayList<>();
	}

	protected User() {
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void addRole(String role) {
		this.roles.add(role);
	}

	public void addModdedRoom(Room room) {
		this.moddedRooms.add(room);
	}

	public void addParticipatedRoom(Room room) {
		this.participatedRooms.add(room);
	}

	public void removeParticipatedRoom(Room room) {
		this.participatedRooms.remove(room);
	}
}
