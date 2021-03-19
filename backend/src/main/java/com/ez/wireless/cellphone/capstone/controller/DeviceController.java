package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.dto.DeviceDTO;
import com.ez.wireless.cellphone.capstone.model.Device;
import com.ez.wireless.cellphone.capstone.service.DeviceService;

@RestController
@RequestMapping("/api/device")
public class DeviceController 
{
	@Autowired
	private DeviceService deviceService;
	
	/**
	 * Gets all the rows of the device table when the /all URL identifier is called
	 * @return the devices
	 */
	@GetMapping(path = "/all")
	public List<Device> getAll()
	{
		return deviceService.getAllDevices();
	}
	
	/**
	 * Gets rows from the device table that match the device name
	 * @param modelName The model name of the device
	 * @return The device based on the model name 
	 */
	@GetMapping
	public List<Device> getDeviceBasedOnModelName(@RequestParam String modelName){
		return deviceService.findDevicesBasedOnModelName(modelName);
	}
	
	/**
	 * Saves a device to the device table
	 * @param device The device
	 */
	@PostMapping
	public void saveNewDevice(@RequestBody DeviceDTO device) {
		try {
			deviceService.saveDevice(device);
		}
		
		catch (IllegalArgumentException e) 
		{
			throw new IllegalArgumentException("Device could not be saved");
		}
	}
	
	/*
	
	@PostMapping
	public void saveDevice(@RequestBody Device device)
	{
		try 
		{
			deviceService.saveDevice(device);
		} 
		catch (IllegalArgumentException e) 
		{
			throw new IllegalArgumentException("Device could not be saved");
		}
	}
	*/
}
