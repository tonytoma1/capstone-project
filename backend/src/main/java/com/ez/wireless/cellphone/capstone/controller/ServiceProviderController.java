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
	private ServiceProviderService sps;
	
	@GetMapping
	public List<ServiceProvider> getAllProviders()
	{
		return sps.getAllProviders();
	}
	
	@PostMapping
	public void saveProvider(@RequestBody ServiceProvider sp)
	{
		try
		{
			sps.saveProvider(sp);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException("The Service Provider COuldn't be save");
		}
	}
}
