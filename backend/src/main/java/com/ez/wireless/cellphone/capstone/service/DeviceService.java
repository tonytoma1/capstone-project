package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties.Storage;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.ez.wireless.cellphone.capstone.repository.DeviceCompanyRepository;
import com.ez.wireless.cellphone.capstone.repository.DeviceConditionRepository;
import com.ez.wireless.cellphone.capstone.repository.DeviceRepository;
import com.ez.wireless.cellphone.capstone.repository.ModelRepository;
import com.ez.wireless.cellphone.capstone.repository.ServiceProviderRepository;
import com.ez.wireless.cellphone.capstone.repository.StorageCapacityRepository;
import com.ez.wireless.cellphone.capstone.dto.DeviceDTO;
import com.ez.wireless.cellphone.capstone.model.Device;
import com.ez.wireless.cellphone.capstone.model.DeviceCompany;
import com.ez.wireless.cellphone.capstone.model.DeviceCondition;
import com.ez.wireless.cellphone.capstone.model.Model;
import com.ez.wireless.cellphone.capstone.model.ServiceProvider;
import com.ez.wireless.cellphone.capstone.model.StorageCapacity;

@Service
public class DeviceService 
{
	@Autowired
	private DeviceRepository deviceRepository;
	
	@Autowired
	private ModelRepository modelRepository;
	@Autowired
	private StorageCapacityRepository storageCapacityRepository;
	@Autowired
	private DeviceCompanyRepository deviceCompanyRepository;
	@Autowired
	private DeviceConditionRepository deviceConditionRepository;
	@Autowired
	private ServiceProviderRepository serviceProviderRepository;
	
	
	/**
	 * Gets all the rows in the device table
	 * @return The list of accounts
	 */
	public List<Device> getAllDevices()
	{
		List<Device> accounts = new ArrayList<>();
		deviceRepository.findAll().forEach(x -> accounts.add(x));
		return accounts;
	}
	
	/**
	 * Finds all devices based on the model name
	 * @return a list of device objects
	 */
	public List<Device> findDevicesBasedOnModelName(String modelName) {
		
		Model model = modelRepository.findByModelName(modelName);		
		return deviceRepository.findByModel(model);
		
	}
	
	
	public List<Device> findDevices(String modelName, Integer storageSize, String serviceProviderName) {
		Model model = modelRepository.findByModelName(modelName);
		StorageCapacity storageCapacity = storageCapacityRepository.findByStorageCapacitySize(storageSize);
		ServiceProvider serviceProvider = serviceProviderRepository.findByServiceProviderName(serviceProviderName);
		
		return deviceRepository.findByModelAndStorageCapacityAndServiceProvider(model, storageCapacity, serviceProvider);
	}
	
	
	/**
	 * Saves a device based on the ID of the storage capacity, service provider, model, device company,
	 * and device condition
	 * @param deviceDto
	 * @return the saved device if it was persisted properly
	 */
	public Device saveDevice(DeviceDTO deviceDto) {
		 Optional<Model> model = modelRepository.findById(deviceDto.getModelId());
		 Optional<StorageCapacity> storageCapacity = storageCapacityRepository.findById(deviceDto.getStorageCapacityId());
		 Optional<DeviceCompany> deviceCompany = deviceCompanyRepository.findById(deviceDto.getDeviceCompanyId());
		 Optional<DeviceCondition> deviceCondition = deviceConditionRepository.findById(deviceDto.getDeviceConditionId());
		 Optional<ServiceProvider> serviceProvider = serviceProviderRepository.findById(deviceDto.getServiceProviderId());
		 
		 Device device = new Device();
		 device.setDevicePrice(deviceDto.getDevicePrice());
		 device.setDeviceCompany(deviceCompany.get());
		 device.setDeviceCondition(deviceCondition.get());
		 device.setStorageCapacity(storageCapacity.get());
		 device.setModel(model.get());
		 device.setServiceProvider(serviceProvider.get());
		 
		 return deviceRepository.save(device);
	}
	
	/**
	 * Returns all the storage size based on model name
	 * @param modelName the model name
	 * @return the storage size
	 */
	public List<StorageCapacity> getAllStorageBasedOnModelName(String modelName) {
		
		ArrayList<StorageCapacity> storageSizes = new ArrayList<StorageCapacity>();
		
		deviceRepository.findAll().forEach(x -> {
			if(x.getModel().getModelName().equalsIgnoreCase(modelName)) {
				storageSizes.add(x.getStorageCapacity());
			}
		});
		
		return storageSizes;
	}
	
	/**
	 * Saves the Device to the device table
	 * @param device The device
	 * @return The Device if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	public Device saveDevice(Device device) throws IllegalArgumentException
	{
		return deviceRepository.save(device);
	}
}
