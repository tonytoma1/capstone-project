package com.ez.wireless.cellphone.capstone;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashMap;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.shippo.Shippo;
import com.shippo.exception.APIConnectionException;
import com.shippo.exception.APIException;
import com.shippo.exception.AuthenticationException;
import com.shippo.exception.InvalidRequestException;
import com.shippo.model.Shipment;
import com.shippo.model.Transaction;

class ShippoTest 
{	
	//private Shipment 	ship;
	private Transaction trans;
	private String		toName					= "John Doe",
						toCompany				= "SAIT",
						toStreet				= "1301 16 Ave NW",
						toCity					= "Calgary",
						toGeographicalRegion 	= "Alberta",
						toCountry				= "Canada",
						toMailCode				= "T2M0L4";
	private HashMap<String, Object> addressToMap;
	
	private String		fromName				= "Jane Doe",
						fromCompany				= "SAIT",
						fromStreet				= "1301 16 Ave NW",
						fromCity				= "Calgary",
						fromGeographicalRegion 	= "Alberta",
						fromCountry				= "Canada",
						fromMailCode			= "T2M0L4";
	private HashMap<String, Object> addressFromMap;
	
	private double		parcelLength			= 5.5,
						parcelWidth				= 7,
						parcelHight				= 10,
						parcelWeight			= 70;
	private String		parcelMassUnit			= "lb",
						parcelDistanceUnit		= "in";
	private HashMap<String, Object> parcelMap;
	private HashMap<String, Object> shipmentMap;
	
	@BeforeEach
	void setUp() throws Exception
	{
		Shippo.setApiKey("shippo_test_e6df722b2519e79c2cc0d20abd6b2bbd281c3ec2");
		this.addressToMap = new HashMap<String, Object>();
		addressToMap.put("name", toName);
		addressToMap.put("company", toCompany);
		addressToMap.put("street1", toStreet);
		addressToMap.put("city", toCity);
		addressToMap.put("state", toGeographicalRegion);
		addressToMap.put("country", toCountry);
		addressToMap.put("zip", toMailCode);
		
		this.addressFromMap = new HashMap<String, Object>();
		addressFromMap.put("name", fromName);
		addressFromMap.put("company", fromCompany);
		addressFromMap.put("street1", fromStreet);
		addressFromMap.put("city", fromCity);
		addressFromMap.put("state", fromGeographicalRegion);
		addressFromMap.put("country", fromCountry);
		addressFromMap.put("zip", fromMailCode);
		
		this.parcelMap = new HashMap<String, Object>();
		parcelMap.put("length", parcelLength);
		parcelMap.put("width", parcelWidth);
		parcelMap.put("height", parcelHight);		
		parcelMap.put("distance_unit", parcelDistanceUnit);		
		parcelMap.put("weight", parcelWeight);		
		parcelMap.put("mass_unit", parcelMassUnit);
		
		this.shipmentMap = new HashMap<String, Object>();
		shipmentMap.put("address_to", addressToMap);
		shipmentMap.put("address_from", addressFromMap);
		shipmentMap.put("parcels", parcelMap);
		shipmentMap.put("async", false);
		
	}
	
	@AfterEach
	void tearDown() throws Exception
	{
		
	}
	
	@Test
	void apiCallTest() 
	{
		try 
		{
			Shipment.create(shipmentMap);
		} 
		catch (AuthenticationException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		catch (InvalidRequestException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		catch (APIConnectionException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		catch (APIException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//assertTrue(condition);
	}

}
