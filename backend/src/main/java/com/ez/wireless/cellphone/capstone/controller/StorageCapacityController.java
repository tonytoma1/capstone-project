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
	private StorageCapacityService scs; 
	
	@GetMapping
	public List<StorageCapacity> getAllStorageCapacity()
	{
		return scs.getAllStorageCapacity();
	}
	
	@PostMapping
	public void saveStorage(@RequestBody StorageCapacity sc)
	{
		try
		{
			scs.saveStorage(sc);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException("The storage capacity couldn't be saved");
		}
	}
}
