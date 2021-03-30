package com.ez.wireless.cellphone.capstone.dto;

/**
 * The data transfer object used for the devices
 * @author Dakota Harvey
 */
public class DeviceDTO {

	private int modelId;
	private int storageCapacityId;
	private int deviceCompanyId;
	private int deviceConditionId;
	private int serviceProviderId;
	private double devicePrice;
	
	/**
	 * @return the modelId
	 */
	public int getModelId() {
		return modelId;
	}
	/**
	 * @param modelId the modelId to set
	 */
	public void setModelId(int modelId) {
		this.modelId = modelId;
	}
	/**
	 * @return the storageCapacityId
	 */
	public int getStorageCapacityId() {
		return storageCapacityId;
	}
	/**
	 * @param storageCapacityId the storageCapacityId to set
	 */
	public void setStorageCapacityId(int storageCapacityId) {
		this.storageCapacityId = storageCapacityId;
	}
	/**
	 * @return the deviceCompanyId
	 */
	public int getDeviceCompanyId() {
		return deviceCompanyId;
	}
	/**
	 * @param deviceCompanyId the deviceCompanyId to set
	 */
	public void setDeviceCompanyId(int deviceCompanyId) {
		this.deviceCompanyId = deviceCompanyId;
	}
	/**
	 * @return the deviceConditionId
	 */
	public int getDeviceConditionId() {
		return deviceConditionId;
	}
	/**
	 * @param deviceConditionId the deviceConditionId to set
	 */
	public void setDeviceConditionId(int deviceConditionId) {
		this.deviceConditionId = deviceConditionId;
	}
	/**
	 * @return the devicePrice
	 */
	public double getDevicePrice() {
		return devicePrice;
	}
	/**
	 * @param devicePrice the devicePrice to set
	 */
	public void setDevicePrice(double devicePrice) {
		this.devicePrice = devicePrice;
	}
	/**
	 * @return the serviceProviderId
	 */
	public int getServiceProviderId() {
		return serviceProviderId;
	}
	/**
	 * @param serviceProviderId the serviceProviderId to set
	 */
	public void setServiceProviderId(int serviceProviderId) {
		this.serviceProviderId = serviceProviderId;
	}
	
	
	
	
}
