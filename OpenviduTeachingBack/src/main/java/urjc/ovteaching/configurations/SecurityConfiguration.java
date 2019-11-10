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
		http.antMatcher("/api/**");

		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/room/*").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/room/*/inviteCode/*").hasAnyRole("ADMIN");
		
		http.authorizeRequests().anyRequest().permitAll();

		http.csrf().disable();
		http.httpBasic();
		http.logout().logoutSuccessHandler((rq, rs, a) -> {	});
	}

	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}
}