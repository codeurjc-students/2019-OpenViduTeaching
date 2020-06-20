package urjc.ovteaching.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.antMatcher("/ovTeachingApi/**");

		//Users
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/user/rooms").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/users").hasAnyRole("ADMIN");
		
		//Rooms
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/room/*").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/inviteCode/*").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/ovTeachingApi/room/*/user").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/assistants").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/room/*/raiseHand").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/ovTeachingApi/room/*/raiseHand").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/raiseHand").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/rooms").hasAnyRole("ADMIN");

		//OpenVidu
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/token").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/ovTeachingApi/room/*/user").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/room/*/signal/*").hasAnyRole("ADMIN");
				
		//Recording
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/recordings").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/recording/*").hasAnyRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/room/*/recording/start").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/ovTeachingApi/room/*/recording/stop").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/room/*/recording/isBeingRecorded").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/ovTeachingApi/isRecordingEnabled").hasAnyRole("USER");
		
		http.authorizeRequests().anyRequest().permitAll();

		http.csrf().disable();
		http.httpBasic();
		http.logout().logoutSuccessHandler((rq, rs, a) -> {	});
	}

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}
}