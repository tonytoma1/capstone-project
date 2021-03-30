package com.ez.wireless.cellphone.capstone.dto;

/**
 * When the customer completes his order, this DTO will contain the device specifications. 
 * @author Tony Toma
 */
public class DeviceOrderDTO {
	
	private int deviceId;
	private String modelName;
	private int storageSize;
	private String serviceProvider;
	private String condition;
	private double price;
	
	
	/**
	 * @return the deviceId
	 */
	public int getDeviceId() {
		return deviceId;
	}
	/**
	 * @param deviceId the deviceId to set
	 */
	public void setDeviceId(int deviceId) {
		this.deviceId = deviceId;
	}
	/**
	 * @return the modelName
	 */
	public String getModelName() {
		return modelName;
	}
	/**
	 * @param modelName the modelName to set
	 */
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	/**
	 * @return the storageSize
	 */
	public int getStorageSize() {
		return storageSize;
	}
	/**
	 * @param storageSize the storageSize to set
	 */
	public void setStorageSize(int storageSize) {
		this.storageSize = storageSize;
	}
	/**
	 * @return the serviceProvider
	 */
	public String getServiceProvider() {
		return serviceProvider;
	}
	/**
	 * @param serviceProvider the serviceProvider to set
	 */
	public void setServiceProvider(String serviceProvider) {
		this.serviceProvider = serviceProvider;
	}
	/**
	 * @return the condition
	 */
	public String getCondition() {
		return condition;
	}
	/**
	 * @param condition the condition to set
	 */
	public void setCondition(String condition) {
		this.condition = condition;
	}
	/**
	 * @return the price
	 */
	public double getPrice() {
		return price;
	}
	/**
	 * @param price the price to set
	 */
	public void setPrice(double price) {
		this.price = price;
	}
	
	
}
