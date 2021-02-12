package com.ez.wireless.cellphone.capstone.jwt;

import java.io.Serializable;

/**
 * This is the JWT request object that is sent to the controller
 * @author Tony
 *
 * Referenced from this guide: https://www.javainuse.com/spring/boot-jwt
 */
public class JwtRequest implements Serializable{

	private String username;
	
	private String password;
	
	public JwtRequest() {
		
	}
	
	public JwtRequest(String username, String password) {
		this.username = username;
		this.password = password;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
