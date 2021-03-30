package com.ez.wireless.cellphone.capstone.dto;

import java.util.List;

/**
 * The dto used for the shipping label
 * @author Dakota Harvey
 */
public class ShippingLabelDTO 
{
	private String	fromFirstName, 
					fromLastName, 
					fromCompany,
					fromStreet1,  
					fromStreet2, 
					fromCity, 
					// the state
					fromGeoRegion, 
					fromCountry, 
					// zip code
					fromMailCode, 
					fromMessage,
					fromPhone, 
					fromEmail, 
					postalService;
	
	private double weight;
	private boolean residental;
	
	private List<DeviceOrderDTO> device;
	
	

	/**
	 * @return the device
	 */
	public List<DeviceOrderDTO> getDevice() {
		return device;
	}

	/**
	 * @param device the device to set
	 */
	public void setDevice(List<DeviceOrderDTO> device) {
		this.device = device;
	}

	/**
	 * @return the postalService
	 */
	public String getPostalService() {
		return postalService;
	}

	/**
	 * @param postalService the postalService to set
	 */
	public void setPostalService(String postalService) {
		this.postalService = postalService;
	}

	/**
	 * @return the weight
	 */
	public double getWeight() {
		return weight;
	}

	/**
	 * @param weight the weight to set
	 */
	public void setWeight(double weight) {
		this.weight = weight;
	}

	/**
	 * @return the residental
	 */
	public boolean isResidental() {
		return residental;
	}

	/**
	 * @param residental the residental to set
	 */
	public void setResidental(boolean residental) {
		this.residental = residental;
	}

	/**
	 * @return the toFname
	 */
	public String getFromFirstName() {
		return fromFirstName;
	}

	/**
	 * @param toFname the toFname to set
	 */
	public void setFromFirstName(String toFname) {
		this.fromFirstName = toFname;
	}

	/**
	 * @return the toLname
	 */
	public String getFromLastName() {
		return fromLastName;
	}

	/**
	 * @param toLname the toLname to set
	 */
	public void setFromLastName(String toLname) {
		this.fromLastName = toLname;
	}

	/**
	 * @return the toCompany
	 */
	public String getFromCompany() {
		return fromCompany;
	}

	/**
	 * @param toCompany the toCompany to set
	 */
	public void setFromCompany(String toCompany) {
		this.fromCompany = toCompany;
	}

	/**
	 * @return the toStreet1
	 */
	public String getFromStreet1() {
		return fromStreet1;
	}

	/**
	 * @param toStreet1 the toStreet1 to set
	 */
	public void setFromStreet1(String toStreet1) {
		this.fromStreet1 = toStreet1;
	}

	/**
	 * @return the toStreet2
	 */
	public String getFromStreet2() {
		return fromStreet2;
	}

	/**
	 * @param toStreet2 the toStreet2 to set
	 */
	public void setFromStreet2(String toStreet2) {
		this.fromStreet2 = toStreet2;
	}

	/**
	 * @return the toCity
	 */
	public String getFromCity() {
		return fromCity;
	}

	/**
	 * @param toCity the toCity to set
	 */
	public void setFromCity(String toCity) {
		this.fromCity = toCity;
	}

	/**
	 * @return the toGeoRegion
	 */
	public String getFromGeoRegion() {
		return fromGeoRegion;
	}

	/**
	 * @param toGeoRegion the toGeoRegion to set
	 */
	public void setFromGeoRegion(String toGeoRegion) {
		this.fromGeoRegion = toGeoRegion;
	}

	/**
	 * @return the toCountry
	 */
	public String getFromCountry() {
		return fromCountry;
	}

	/**
	 * @param toCountry the toCountry to set
	 */
	public void setFromCountry(String toCountry) {
		this.fromCountry = toCountry;
	}

	/**
	 * @return the toMailCode
	 */
	public String getFromMailCode() {
		return fromMailCode;
	}

	/**
	 * @param toMailCode the toMailCode to set
	 */
	public void setFromMailCode(String toMailCode) {
		this.fromMailCode = toMailCode;
	}

	/**
	 * @return the toMessage
	 */
	public String getFromMessage() {
		return fromMessage;
	}

	/**
	 * @param toMessage the toMessage to set
	 */
	public void setFromMessage(String toMessage) {
		this.fromMessage = toMessage;
	}

	/**
	 * @return the toPhone
	 */
	public String getFromPhone() {
		return fromPhone;
	}

	/**
	 * @param toPhone the toPhone to set
	 */
	public void setFromPhone(String toPhone) {
		this.fromPhone = toPhone;
	}

	/**
	 * @return the toEmail
	 */
	public String getFromEmail() {
		return fromEmail;
	}

	/**
	 * @param toEmail the toEmail to set
	 */
	public void setFromEmail(String toEmail) {
		this.fromEmail = toEmail;
	}
	
}
