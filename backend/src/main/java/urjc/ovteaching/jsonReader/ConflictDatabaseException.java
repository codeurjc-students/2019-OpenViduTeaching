package urjc.ovteaching.jsonReader;

public class ConflictDatabaseException extends Exception {

	private String name;
	private String className;

	private static final long serialVersionUID = 736971502337593235L;
	
	public ConflictDatabaseException(String name, String className) {
		super();
		this.name = name;
		this.className = className; 
	}

	public String getName() {
		return name;
	}
	
	public String getClassName() {
		return className;
	}
}
