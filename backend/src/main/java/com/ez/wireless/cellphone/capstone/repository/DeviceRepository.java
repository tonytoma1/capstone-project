package com.ez.wireless.cellphone.capstone.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.Device;
import com.ez.wireless.cellphone.capstone.model.Model;
import com.ez.wireless.cellphone.capstone.model.ServiceProvider;
import com.ez.wireless.cellphone.capstone.model.StorageCapacity;

@Repository
public interface DeviceRepository extends CrudRepository<Device, Integer>{
	
	List<Device> findByModel(Model model);
	List<Device> findByModelAndStorageCapacityAndServiceProvider(Model model, StorageCapacity storageCapacity, 
																ServiceProvider serviceProvider);	
}
