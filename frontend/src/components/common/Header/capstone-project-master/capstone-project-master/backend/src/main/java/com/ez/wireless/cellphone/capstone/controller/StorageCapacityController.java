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

@RestController
@RequestMapping("/api/storage-capacity")
public class StorageCapacityController 
{
	@Autowired
	private StorageCapacityService storageCapacityService; 
	
	@GetMapping
	public List<StorageCapacity> getAllStorageCapacity()
	{
		return storageCapacityService.getAllStorageCapacity();
	}
	
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
