package urjc.ovteaching.jsonReader;

public class NotFoundDatabaseException extends Exception {

	private String roomName;
	private String userName;
	private static final long serialVersionUID = -1236340715995669676L;

	public NotFoundDatabaseException(String roomName, String userName) {
		super();
		this.roomName = roomName;
		this.userName = userName;
	}

	public String getRoomName() {
		return roomName;
	}

	public String getUserName() {
		return userName;
	}
}
