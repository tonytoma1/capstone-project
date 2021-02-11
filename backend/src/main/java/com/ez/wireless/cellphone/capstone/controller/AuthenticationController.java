package com.ez.wireless.cellphone.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.jwt.JwtRequest;
import com.ez.wireless.cellphone.capstone.jwt.JwtResponse;
import com.ez.wireless.cellphone.capstone.jwt.JwtTokenUtil;
import com.ez.wireless.cellphone.capstone.jwt.JwtUserDetailsService;

/**
 * Responsible for the authentication of the user
 * @author Tony
 *
 */
@RestController
@CrossOrigin
@RequestMapping("/api/authentication")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;
	
	@PostMapping
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest jwtRequest)
	throws Exception {
		
		authenticateUser(jwtRequest.getUsername(), jwtRequest.getPassword());
		
		UserDetails userDetails = jwtUserDetailsService
									.loadUserByUsername(jwtRequest.getUsername());
		
		String token = jwtTokenUtil.generateToken(userDetails, jwtRequest.getUsername());
		
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	/**
	 * Authenticates a user
	 * @param username the user's username
	 * @param password the user's password
	 */
	private void authenticateUser(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
		}
		catch(DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		}
		catch(BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}
