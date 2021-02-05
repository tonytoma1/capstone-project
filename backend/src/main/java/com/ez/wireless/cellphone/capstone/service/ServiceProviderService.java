package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ez.wireless.cellphone.capstone.model.ServiceProvider;
import com.ez.wireless.cellphone.capstone.repository.ServiceProviderRepository;

@Service
public class ServiceProviderService 
{	
	private ServiceProviderRepository spr;
	
	@Autowired
	public ServiceProviderService(ServiceProviderRepository spr)
	{
		this.spr = spr;
	}
	
	/**
	 * Gets all the rows in the Service_Provider table
	 * @return
	 */
	public List<ServiceProvider> getAllProviders()
	{
		List<ServiceProvider> providers = new ArrayList<>();
		spr.findAll().forEach(x -> providers.add(x));
		return providers;
	}
	
	/**
	 * Saves the condition to the service_provider table
	 * @param serviceProvider the Service Provider
	 * @return The ServiceProvider if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	public ServiceProvider saveProvider(ServiceProvider sp) throws IllegalArgumentException
	{
		return spr.save(sp);
	}
}
