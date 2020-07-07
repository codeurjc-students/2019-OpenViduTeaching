package urjc.ovteaching.jsonReader;

public class TemporaryUserException extends Exception {

	private static final long serialVersionUID = -3177993195061139985L;
	
	private String userName;

	public TemporaryUserException(String userName) {
		this.userName = userName;
	}

	public String getUserName() {
		return userName;
	}
}
