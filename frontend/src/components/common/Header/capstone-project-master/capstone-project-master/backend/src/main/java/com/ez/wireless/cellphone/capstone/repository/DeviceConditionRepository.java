package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.DeviceCondition;

@Repository
public interface DeviceConditionRepository extends CrudRepository<DeviceCondition, Integer> {
	/*
	 * You can find by column name	
	  public DeviceCondition findByConditionName(String conditionName);
	*/
}
