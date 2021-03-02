package com.ez.wireless.cellphone.capstone.dto;

public class UpdatePasswordDTO {
	
	private String uuid;
	private String password;
	
	public UpdatePasswordDTO(String uuid, String password) {
		super();
		this.uuid = uuid;
		this.password = password;
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
