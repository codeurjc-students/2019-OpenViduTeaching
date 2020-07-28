package urjc.ovteaching;

import java.io.IOException;
import java.nio.file.NoSuchFileException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.io.ByteStreams;

@CrossOrigin
@RestController
public class AssetsController {
	
	@Autowired
    ResourceLoader resourceLoader;
	
	@Value("${ASSETS_FOLDER}")
	private String assetsFolder;
	
	@GetMapping("/assets/images/{image}")
	public ResponseEntity<byte[]> getImage(@PathVariable String image) throws IOException {
		try {
			if (assetsFolder.startsWith("/") || assetsFolder.matches("[a-zA-Z]\\:.*")) {
				assetsFolder = "file:" + assetsFolder;
			}
			byte[] bytes = ByteStreams.toByteArray(resourceLoader.getResource(assetsFolder + image).getInputStream());
		
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
