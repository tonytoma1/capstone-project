package com.ez.wireless.cellphone.capstone.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.ez.wireless.cellphone.capstone.filter.JwtAuthenticationEntryPointFilter;
import com.ez.wireless.cellphone.capstone.filter.JwtRequestFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	// Verifies a user's login based on the JwtUserDetailsService class
	@Autowired
	private UserDetailsService jwtUserDetailsService;
	
	@Autowired
	private JwtAuthenticationEntryPointFilter jwtAuthenticationEntryPoint;
	
	
	@Autowired
	private JwtRequestFilter jwtRequestFilter;
	
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		// configure AuthenticationManager so that it knows from where to load
		// user for matching credentials
	    // Use BCryptPasswordEncoder
		auth.userDetailsService(jwtUserDetailsService)
			.passwordEncoder(passwordEncoder());
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// Enable CORS and disable CSRF
		http.cors().and().csrf().disable()
		// Add a filter to validate the tokens with every request
		.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
		.authorizeRequests()
				// Register and login end-points are open so the user can login and 
		        // create an account
				.antMatchers(HttpMethod.POST, "/api/register").permitAll()
				.antMatchers(HttpMethod.POST,"/api/authentication").permitAll()
				.antMatchers(HttpMethod.POST, "/api/person/**").permitAll()
			
				
				// AccountController white-list
				.antMatchers(HttpMethod.POST, "/api/account/label").permitAll()
				.antMatchers(HttpMethod.POST, "/api/account/uuid").permitAll()
				.antMatchers(HttpMethod.POST, "/api/account/updatepassword").permitAll()
				.antMatchers(HttpMethod.POST, "/api/account/register").permitAll()
				
				// Put the white listed end-points here
				.antMatchers(HttpMethod.GET, "/api/device-company").permitAll()
				.antMatchers(HttpMethod.GET, "/api/condition").permitAll()
				.antMatchers(HttpMethod.GET, "/api/storage-capacity").permitAll()
				.antMatchers(HttpMethod.GET, "/api/service-provider").permitAll()
				.antMatchers(HttpMethod.GET, "/api/device").permitAll()
				//.antMatchers(HttpMethod.GET, "/api/account/**").permitAll()
				.antMatchers(HttpMethod.GET, "/api/account").hasAnyRole("ADMIN", "USER")
				// All other end-points are secured
				.anyRequest().hasRole("ADMIN")
			.and()
			// make sure we use stateless session; session won't be used to
			// store user's state.
			.exceptionHandling()
				.authenticationEntryPoint(jwtAuthenticationEntryPoint)
				.and()
		        .sessionManagement()
		        .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	// Used by spring security if CORS is enabled.
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOriginPattern("*"); // allowed on react app
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}

