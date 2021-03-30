package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The object model for the temporary clients on the database
 * @author Tony Toma
 */
@Entity
@Table(name = "client_temp")
public class ClientTemp {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_temp_sequence")
	@SequenceGenerator(name="client_temp_sequence", sequenceName = "client_temp_sequence", allocationSize = 1)
	@Column(name = "client_temp_id")
	private Integer clientTempId;
	
	@Column(name = "street_address")
	private String streetAddress;
	
	@Column(name="state")
	private String state;
	
	@Column(name="zip")
	private String zip;
	
	@Column(name="country")
	private String country;
	
	@Column(name="email")
	private String email;

	/**
	 * @return the clientTempId
	 */
	public Integer getClientTempId() {
		return clientTempId;
	}

	/**
	 * @param clientTempId the clientTempId to set
	 */
	public void setClientTempId(Integer clientTempId) {
		this.clientTempId = clientTempId;
	}

	/**
	 * @return the streetAddress
	 */
	public String getStreetAddress() {
		return streetAddress;
	}

	/**
	 * @param streetAddress the streetAddress to set
	 */
	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	/**
	 * @return the state
	 */
	public String getState() {
		return state;
	}

	/**
	 * @param state the state to set
	 */
	public void setState(String state) {
		this.state = state;
	}

	/**
	 * @return the zip
	 */
	public String getZip() {
		return zip;
	}

	/**
	 * @param zip the zip to set
	 */
	public void setZip(String zip) {
		this.zip = zip;
	}

	/**
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * @param country the country to set
	 */
	public void setCountry(String country) {
		this.country = country;
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
	
	

}
