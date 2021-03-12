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
	
	@GetMapping(path = "/all")
	public List<Device> getAll()
	{
		return deviceService.getAllDevices();
	}
	
	@GetMapping
	public List<Device> getDeviceBasedOnModelName(@RequestParam String modelName){
		return deviceService.findDevicesBasedOnModelName(modelName);
	}
	
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
