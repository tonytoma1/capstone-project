package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.repository.DeviceRepository;
import com.ez.wireless.cellphone.capstone.model.Device;

@Service
public class DeviceService 
{
	private DeviceRepository deviceRepository;
	
	@Autowired
	public DeviceService(DeviceRepository deviceRepository)
	{
		this.deviceRepository = deviceRepository;
	}
	
	/**
	 * Gets all the rows in the device table
	 * @return
	 */
	public List<Device> getAllDevices()
	{
		List<Device> accounts = new ArrayList<>();
		deviceRepository.findAll().forEach(x -> accounts.add(x));
		return accounts;
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
