package com.ez.wireless.cellphone.capstone.dto;

/**
 * Data transfer object used when registering a user to the database
 * 
 * For more info visit: https://stackabuse.com/data-transfer-object-pattern-in-java-implementation-and-mapping
 *  * 
 * @author Tony 
 *
 */
public class AccountPersonDTO {
	
	private String username;
	
	private String password;

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
 