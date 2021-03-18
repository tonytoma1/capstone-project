package com.ez.wireless.cellphone.capstone.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.Device;
import com.ez.wireless.cellphone.capstone.model.Model;

@Repository
public interface DeviceRepository extends CrudRepository<Device, Integer>{
	
	List<Device> findByModel(Model model);
}
