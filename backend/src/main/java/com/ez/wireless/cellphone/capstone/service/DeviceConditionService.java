package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.DeviceCondition;
import com.ez.wireless.cellphone.capstone.repository.DeviceConditionRepository;

@Service
public class DeviceConditionService {

	private DeviceConditionRepository deviceConditionRepository;

	@Autowired
	public DeviceConditionService(DeviceConditionRepository deviceConditionRepository) {
		this.deviceConditionRepository = deviceConditionRepository;
	}
	
	/**
	 * Gets all of the rows in the device_condition a table
	 * @return a list of device conditions
	 */
	public List<DeviceCondition> getAllConditions() {
		List<DeviceCondition> conditions = new ArrayList();
		
		deviceConditionRepository.findAll()
							.forEach(x -> conditions.add(x));
		
		return conditions;
	}
	
	/**
	 * Saves the condition to the device_condition table
	 * @param deviceCondition the device condition 
	 * @throws IllegalArgumentException if the argument is null
	 * @return the DeviceCondition if it was saved successfully to the database
	 */
	public DeviceCondition saveCondition(DeviceCondition deviceCondition) 
	throws IllegalArgumentException {
		return deviceConditionRepository.save(deviceCondition);
	}
	
	
	
}
