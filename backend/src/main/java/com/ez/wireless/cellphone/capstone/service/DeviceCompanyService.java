package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ez.wireless.cellphone.capstone.model.DeviceCompany;
import com.ez.wireless.cellphone.capstone.repository.DeviceCompanyRepository;

/**
 * The service for the Device_Company table
 * @author Tony Toma
 */
@Service
public class DeviceCompanyService {

private DeviceCompanyRepository deviceCompanyRepository;
	
	@Autowired
	public DeviceCompanyService(DeviceCompanyRepository deviceCompanyRepository)
	{
		this.deviceCompanyRepository = deviceCompanyRepository;
	}
	
	/**
	 * Gets all the rows in the Device_Company table
	 * @return
	 */
	public List<DeviceCompany> getAllDeviceCompanies()
	{
		List<DeviceCompany> companies = new ArrayList<>();
		deviceCompanyRepository.findAll().forEach(x -> companies.add(x));
		return companies;
	}
	
	/**
	 * Saves the condition to the device_company table
	 * @param deviceCompany the Device Company
	 * @return The DeviceCompany if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	public DeviceCompany saveDeviceCompany(DeviceCompany deviceCompany) throws IllegalArgumentException
	{
		return deviceCompanyRepository.save(deviceCompany);
	}



}

