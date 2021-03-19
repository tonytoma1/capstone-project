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
		private DeviceCompanyService deviceCompanyService;
		
		/**
		 * Retrieves all of the Device_Company rows from the database
		 * @return a list of DeviceCompany objects
		 */
		@GetMapping
		public List<DeviceCompany> getAllCompanies()
		{
			return deviceCompanyService.getAllDeviceCompanies();
		}
		
		/**
		 * Saves a DeviceCompany to the Device_Company row in the database
		 * @param deviceCompany The Device Company
		 */
		@PostMapping
		public void saveDeviceCompany(@RequestBody DeviceCompany deviceCompany)
		{
			try
			{
				deviceCompanyService.saveDeviceCompany(deviceCompany);
			}
			catch(IllegalArgumentException e)
			{
				throw new IllegalArgumentException("The Device Company Couldn't be save");
			}
		}
	}

	
	
	

