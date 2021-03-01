package com.ez.wireless.cellphone.capstone.dto;

/**
 * Data transfer object used when registering a user to the database
 * 
 * For more info visit: https://stackabuse.com/data-transfer-object-pattern-in-java-implementation-and-mapping
 *  and:    https://stackoverflow.com/questions/54914807/null-values-are-inserted-in-the-foreign-key-fields-with-hibernate
 * @author Tony 
 *
 */
public class AccountPersonRoleDTO {
	
	private String username,
			password,
			uuid;
	
	private int roleId,
				personId;

	
	/**
	 * @return the roleId
	 */
	public int getRoleId() {
		return roleId;
	}

	/**
	 * @param roleId the roleId to set
	 */
	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	/**
	 * @return the personId
	 */
	public int getPersonId() {
		return personId;
	}

	/**
	 * @param personId the personId to set
	 */
	public void setPersonId(int personId) {
		this.personId = personId;
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
 