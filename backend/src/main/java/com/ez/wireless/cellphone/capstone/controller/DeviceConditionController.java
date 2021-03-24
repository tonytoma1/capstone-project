package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.DeviceCondition;
import com.ez.wireless.cellphone.capstone.service.DeviceConditionService;

@RestController
@RequestMapping("/api/condition")
public class DeviceConditionController {

	@Autowired
	private DeviceConditionService deviceConditionService;

	/**
	 * Retrieves all of the device_condition rows from the database
	 * @return a list of DeviceCondtion objects
	 */
	@GetMapping
	public List<DeviceCondition> getAllConditions() {
		return deviceConditionService.getAllConditions();
	}
	
	/**
	 * Saves a DeviceCondtion to the device_condition row in the database
	 * @param condition The Device Condition
	 */
	@PostMapping
	public void saveCondition(@RequestBody DeviceCondition condition) {
		try {
			deviceConditionService.saveCondition(condition);
		}
		catch(IllegalArgumentException e) {
			throw new IllegalArgumentException("Condition couldn't be saved");
		}
	}
	
	
}
