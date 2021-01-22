package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.OrdersComplete;

@Repository
public interface OrdersCompleteRepository extends CrudRepository<OrdersComplete, Integer> {
	
}
