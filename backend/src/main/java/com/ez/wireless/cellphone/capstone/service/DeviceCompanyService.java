package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ez.wireless.cellphone.capstone.model.DeviceCompany;
import com.ez.wireless.cellphone.capstone.repository.DeviceCompanyRepository;

@Service
public class DeviceCompanyService {

private DeviceCompanyRepository dcr;
	
	@Autowired
	public DeviceCompanyService(DeviceCompanyRepository dcr)
	{
		this.dcr = dcr;
	}
	
	/**
	 * Gets all the rows in the Device_Company table
	 * @return
	 */
	public List<DeviceCompany> getAllDeviceCompanies()
	{
		List<DeviceCompany> companies = new ArrayList<>();
		dcr.findAll().forEach(x -> companies.add(x));
		return companies;
	}
	
	/**
	 * Saves the condition to the device_company table
	 * @param DeviceCompany the Device Company
	 * @return The DeviceCompany if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	public DeviceCompany saveDeviceCompany(DeviceCompany dc) throws IllegalArgumentException
	{
		return dcr.save(dc);
	}



}

