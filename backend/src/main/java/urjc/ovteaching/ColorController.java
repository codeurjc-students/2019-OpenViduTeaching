package urjc.ovteaching;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/ovTeachingApi")
@CrossOrigin
@RestController
public class ColorController {
	
	@Value("${LIGHT_THEME}")
	private boolean lightTheme;
	
	@Value("${PRIMARY_R}")
	private int primary_r;
	@Value("${PRIMARY_G}")
	private int primary_g;
	@Value("${PRIMARY_B}")
	private int primary_b;
	
	@Value("${ACCENT_R}")
	private int accent_r;
	@Value("${ACCENT_G}")
	private int accent_g;
	@Value("${ACCENT_B}")
	private int accent_b;
	
	@Value("${WARN_R}")
	private int warn_r;
	@Value("${WARN_G}")
	private int warn_g;
	@Value("${WARN_B}")
	private int warn_b;

	@SuppressWarnings("unchecked")
	@GetMapping("/theme")
	public ResponseEntity<JSONObject> getTheme() {
		JSONObject colors = new JSONObject();
		colors.put("lightTheme", this.lightTheme);
		colors.put("primary_r", this.primary_r);
		colors.put("primary_g", this.primary_g);
		colors.put("primary_b", this.primary_b);
		colors.put("accent_r", this.accent_r);
		colors.put("accent_g", this.accent_g);
		colors.put("accent_b", this.accent_b);
		colors.put("warn_r", this.warn_r);
		colors.put("warn_g", this.warn_g);
		colors.put("warn_b", this.warn_b);
		return new ResponseEntity<>(colors, HttpStatus.OK);
	}
	
}
