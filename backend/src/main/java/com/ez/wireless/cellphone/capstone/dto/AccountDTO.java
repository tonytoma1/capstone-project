package com.ez.wireless.cellphone.capstone.dto;

public class AccountDTO {
	
	public String username;
	public String uuid;
	
	public AccountDTO(String username, String uuid) {
		super();
		this.username = username;
		this.uuid = uuid;
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
	 * @return the uuid
	 */
	public String getUuid() {
		return uuid;
	}
	/**
	 * @param uuid the uuid to set
	 */
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	
	
}
