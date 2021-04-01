package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ez.wireless.cellphone.capstone.model.StorageCapacity;
import com.ez.wireless.cellphone.capstone.repository.StorageCapacityRepository;

/**
 * The service for Storage_Capacity table
 * @author Tony Toma
 */
@Service
public class StorageCapacityService {
	
	@Autowired
	private StorageCapacityRepository storageCapacityRepository; 

	public StorageCapacityService(StorageCapacityRepository storageCapacityRepository)
	{
		this.storageCapacityRepository = storageCapacityRepository;
	}
	

	/**
	 * Gets all the rows in the Storage_Capacity table
	 * @return
	 */
	
	public List<StorageCapacity> getAllStorageCapacity()
	{
		List<StorageCapacity> storage = new ArrayList<>();
		storageCapacityRepository.findAll().forEach(x -> storage.add(x));
		return storage;
	}
	

	/**
	 * Saves the condition to the storage_capacity table
	 * @param storageCapacity the Storage Capacity
	 * @return The StorageCapacity if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	public StorageCapacity saveStorage(StorageCapacity storageCapacity) throws IllegalArgumentException
	{
		return storageCapacityRepository.save(storageCapacity);
	
}


}
