package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ez.wireless.cellphone.capstone.model.StorageCapacity;
import com.ez.wireless.cellphone.capstone.service.StorageCapacityService;

/**
 * Responsible for the storage capacities for the front end.
 * @author Tony Toma
 */
@RestController
@RequestMapping("/api/storage-capacity")
public class StorageCapacityController 
{
	@Autowired
	private StorageCapacityService storageCapacityService; 
	
	/**
	 * Gets all the storages capacities from the Storage_Capacity table
	 * @return the storage capacities
	 */
	@GetMapping
	public List<StorageCapacity> getAllStorageCapacity()
	{
		return storageCapacityService.getAllStorageCapacity();
	}
	
	/**
	 * Saves a storage capacity to the Storage_Capacity table
	 * @param storageCapacity the storage capacity
	 */
	@PostMapping
	public void saveStorage(@RequestBody StorageCapacity storageCapacity)
	{
		try
		{
			storageCapacityService.saveStorage(storageCapacity);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException("The storage capacity couldn't be saved");
		}
	}
}
