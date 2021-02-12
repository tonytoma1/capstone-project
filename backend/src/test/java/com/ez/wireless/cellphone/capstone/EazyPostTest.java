package com.ez.wireless.cellphone.capstone;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.easypost.EasyPost;
import com.easypost.model.Address;

class EazyPostTest 
{
	private String		toName					= "John Doe",
						toCompany				= "SAIT",
						toStreet				= "1301 16 Ave NW",
						toCity					= "Calgary",
						toGeographicalRegion 	= "Alberta",
						toCountry				= "Canada",
						toMailCode				= "T2M0L4";
	Map<String, Object> toAddressMap = new HashMap<String, Object>();
	
	private String		fromName				= "Jane Doe",
						fromCompany				= "SAIT",
						fromStreet				= "1301 16 Ave NW",
						fromCity				= "Calgary",
						fromGeographicalRegion 	= "Alberta",
						fromCountry				= "Canada",
						fromMailCode			= "T2M0L4";
	Map<String, Object> fromAddressMap = new HashMap<String, Object>();
	
	private double		parcelLength			= 5.5,
						parcelWidth				= 7,
						parcelHight				= 10,
						parcelWeight			= 70;
	private String		parcelMassUnit			= "lb",
						parcelDistanceUnit		= "in";
	
	@BeforeEach
	void setUp() throws Exception
	{
		EasyPost.apiKey = "EZTK49ff1046f34b4161b5d4531cd632f2c6PqxVBYFGS0cXZpSKqWSIbQ";
		fromAddressMap.put("company", fromCompany);
		fromAddressMap.put("street1", fromStreet);
		fromAddressMap.put("city", fromCity);
		fromAddressMap.put("state", fromGeographicalRegion);
		fromAddressMap.put("zip", fromMailCode);
		Address fromAddress = Address.create(fromAddressMap);
		
		toAddressMap.put("company", toCompany);
		toAddressMap.put("street1", toStreet);
		toAddressMap.put("city", toCity);
		toAddressMap.put("state", toGeographicalRegion);
		toAddressMap.put("zip", toMailCode);
		Address toAddress = Address.create(toAddressMap);
		
		
	}
	
	
	@Test
	void test() 
	{
		fail("Not yet implemented");
	}

}
