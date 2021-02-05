package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.ServiceProvider;
import com.ez.wireless.cellphone.capstone.service.ServiceProviderService;

@RestController
@RequestMapping("/api/service-provider")
public class ServiceProviderController 
{
	@Autowired
	private ServiceProviderService serviceProviderService;
	
	@GetMapping
	public List<ServiceProvider> getAllProviders()
	{
		return serviceProviderService.getAllProviders();
	}
	
	@PostMapping
	public void saveProvider(@RequestBody ServiceProvider serviceProvider)
	{
		try
		{
			serviceProviderService.saveProvider(serviceProvider);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException("The Service Provider Couldn't be save");
		}
	}
}
