package urjc.ovteaching;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.Paths;

import javax.annotation.PostConstruct;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class AssetsController {
	
	private static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "/src/main/resources/static/assets/images");
	
	@PostConstruct
	public void init() throws IOException {
		if (!Files.exists(FILES_FOLDER)) {
			Files.createDirectories(FILES_FOLDER);
		}
	}
	
	@GetMapping("/assets/images/{image}")
	public ResponseEntity<byte[]> getImage(@PathVariable String image) throws IOException {
		try {
			Path path = FILES_FOLDER.resolve(image);
			byte[] bytes = Files.readAllBytes(path);
		
			String[] imageName = image.split("\\.");
			String filetype = imageName[imageName.length-1];
			final HttpHeaders headers = new HttpHeaders();
			if(filetype.equals("png") || filetype.equals("PNG")) {
				headers.setContentType(MediaType.IMAGE_PNG);
			} else {
				headers.setContentType(MediaType.IMAGE_JPEG);
			}
			
			return new ResponseEntity<byte[]>(bytes, headers, HttpStatus.OK);
		} catch(NoSuchFileException e) {
			return new ResponseEntity<byte[]>(HttpStatus.NOT_FOUND);
		}
	} 
}
