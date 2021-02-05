package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ez.wireless.cellphone.capstone.model.DeviceCompany;
import com.ez.wireless.cellphone.capstone.service.DeviceCompanyService;

	@RestController
	@RequestMapping("/api/device-company")
	public class DeviceCompanyController {	
		@Autowired
		private DeviceCompanyService dcs;
		
		@GetMapping
		public List<DeviceCompany> getAllCompanies()
		{
			return dcs.getAllDeviceCompanies();
		}
		
		@PostMapping
		public void saveDeviceCompany(@RequestBody DeviceCompany dc)
		{
			try
			{
				dcs.saveDeviceCompany(dc);
			}
			catch(IllegalArgumentException e)
			{
				throw new IllegalArgumentException("The Device Company Couldn't be save");
			}
		}
	}

	
	
	

