package com.ez.wireless.cellphone.capstone.model;

import com.ez.wireless.cellphone.capstone.model.DeviceCondition;
import com.ez.wireless.cellphone.capstone.model.StorageCapacity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
/**
 * The object model for the devices on the database
 * @author Dakota Harvey
 */
@Entity
@Table(name = "device")
public class Device 
{
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "device_sequence")
	@SequenceGenerator(name="device_sequence", sequenceName = "device_sequence", allocationSize = 1)
	@Column(name = "device_id")
	private Integer deviceId;
	
	/*
	@Column(name = "device_name")
	private String deviceName;
	*/
	
	@OneToOne
	@JoinColumn(name = "model_id")
	private Model model;
	
	@Column(name = "device_price")
	private double devicePrice;
	
	@OneToOne
	//@MapsId
	@JoinColumn(name = "storage_capacity_id")
	private StorageCapacity storageCapacity;
	
	@OneToOne
	//@MapsId
	@JoinColumn(name = "condition_id")
	private DeviceCondition deviceCondition;
	
	@OneToOne
	//@MapsId
	@JoinColumn(name = "service_provider_id")
	private ServiceProvider serviceProvider;
	
	@OneToOne
	//@MapsId
	@JoinColumn(name = "device_company_id")
	private DeviceCompany deviceCompany;
	
	

	/**
	 * @return The device ID
	 */
	public Integer getDeviceId() {
		return deviceId;
	}

	/**
	 * @param deviceId The device ID
	 */
	public void setDeviceId(Integer deviceId) {
		this.deviceId = deviceId;
	}

	

	/**
	 * @return the model
	 */
	public Model getModel() {
		return model;
	}

	/**
	 * @param model the model to set
	 */
	public void setModel(Model model) {
		this.model = model;
	}

	/**
	 * @return The device price
	 */
	public double getDevicePrice() {
		return devicePrice;
	}

	/**
	 * @param devicePrice the device price
	 */
	public void setDevicePrice(double devicePrice) {
		this.devicePrice = devicePrice;
	}

	/**
	 * @return The storage capacity
	 */
	public StorageCapacity getStorageCapacity() {
		return storageCapacity;
	}

	/**
	 * @param storageCapacity the storage capacity
	 */
	public void setStorageCapacity(StorageCapacity storageCapacity) {
		this.storageCapacity = storageCapacity;
	}

	/**
	 * @return the device condition
	 */
	public DeviceCondition getDeviceCondition() {
		return deviceCondition;
	}

	/**
	 * @param deviceCondition the device condition
	 */
	public void setDeviceCondition(DeviceCondition deviceCondition) {
		this.deviceCondition = deviceCondition;
	}

	/**
	 * @return the service provider
	 */
	public ServiceProvider getServiceProvider() {
		return serviceProvider;
	}

	/**
	 * @param serviceProvider the service provider
	 */
	public void setServiceProvider(ServiceProvider serviceProvider) {
		this.serviceProvider = serviceProvider;
	}

	/**
	 * @return the device company
	 */
	public DeviceCompany getDeviceCompany() {
		return deviceCompany;
	}

	/**
	 * @param deviceCompany the device company
	 */
	public void setDeviceCompany(DeviceCompany deviceCompany) {
		this.deviceCompany = deviceCompany;
	}
}
