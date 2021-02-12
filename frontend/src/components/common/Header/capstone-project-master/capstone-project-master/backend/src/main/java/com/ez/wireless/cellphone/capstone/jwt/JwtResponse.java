package com.ez.wireless.cellphone.capstone.jwt;

import java.io.Serializable;

/**
 * This is the response that is sent back to the user once the
 * user successfully signs in.
 * @author Tony
 *
 *
 * Referenced from this guide: https://www.javainuse.com/spring/boot-jwt
 */
public class JwtResponse implements Serializable{

	private String jwtToken;
	
	public JwtResponse(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
	public String getToken() {
		return jwtToken;
	}
}
