package urjc.ovteaching.jsonReader;

import java.io.InputStreamReader;
import java.io.Reader;

import javax.annotation.PostConstruct;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer {
	
	@Autowired
	JsonReaderService jsonReaderService;
	
	@Autowired
    ResourceLoader resourceLoader;
	
	@Value("${INITIAL_DATA_FILE}")
	private String initialFile;

	@PostConstruct
	public void init() {
		try {
			if(initialFile.startsWith("/") || initialFile.matches("[a-zA-Z]\\:.*")) {
				initialFile = "file:" + initialFile;
			}
			System.out.println("Reading from file: " + initialFile);
			Reader reader = new InputStreamReader(resourceLoader.getResource(initialFile).getInputStream());
			JSONObject fileObject = (JSONObject) (new JSONParser().parse(reader));
			
			this.jsonReaderService.readJson(fileObject);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
