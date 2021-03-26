package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.ServiceProvider;

@Repository
public interface ServiceProviderRepository extends CrudRepository<ServiceProvider, Integer> 
{
	ServiceProvider findByServiceProviderName(String serviceProviderName);
}
