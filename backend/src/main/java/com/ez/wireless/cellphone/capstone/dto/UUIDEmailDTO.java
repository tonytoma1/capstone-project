package com.ez.wireless.cellphone.capstone.dto;

public class UUIDEmailDTO {

	private String email;
	private String uuid;
	public UUIDEmailDTO(String email, String uuid) {
		super();
		this.email = email;
		this.uuid = uuid;
	}
	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
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
