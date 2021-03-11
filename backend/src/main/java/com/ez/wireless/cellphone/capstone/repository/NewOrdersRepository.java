package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.ez.wireless.cellphone.capstone.model.NewOrders;

@Repository
public interface NewOrdersRepository extends CrudRepository<NewOrders, Integer> {
	
	
}