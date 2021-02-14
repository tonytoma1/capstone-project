package com.ez.wireless.cellphone.capstone;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Address;
import com.easypost.model.Parcel;
import com.easypost.model.Rate;
import com.easypost.model.Shipment;

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
						fromCompany				= "Canada Post",
						fromStreet				= "407 Main Ave W",
						fromCity				= "Sundre",
						fromGeographicalRegion 	= "Alberta",
						fromCountry				= "Canada",
						fromMailCode			= "T0M1X0";
	Map<String, Object> fromAddressMap = new HashMap<String, Object>();
	
	private double		parcelLength			= 5.5,
						parcelWidth				= 7,
						parcelHight				= 10,
						parcelWeight			= 70;
	Map<String, Object> parcelMap = new HashMap<String, Object>();
	Map<String, Object> shipmentMap = new HashMap<String, Object>();

	
	@BeforeEach
	void setUp() throws Exception
	{
		EasyPost.apiKey = "EZTK49ff1046f34b4161b5d4531cd632f2c6PqxVBYFGS0cXZpSKqWSIbQ";
		fromAddressMap.put("company", fromCompany);
		fromAddressMap.put("country", fromCountry);
		fromAddressMap.put("name", fromName);
		fromAddressMap.put("street1", fromStreet);
		fromAddressMap.put("city", fromCity);
		fromAddressMap.put("state", fromGeographicalRegion);
		fromAddressMap.put("zip", fromMailCode);
		Address fromAddress = Address.create(fromAddressMap);
		
		toAddressMap.put("company", toCompany);
		toAddressMap.put("country", toCountry);
		toAddressMap.put("name", toName);
		toAddressMap.put("street1", toStreet);
		toAddressMap.put("city", toCity);
		toAddressMap.put("state", toGeographicalRegion);
		toAddressMap.put("zip", toMailCode);
		Address toAddress = Address.create(toAddressMap);
		
		parcelMap.put("height", parcelHight);
		parcelMap.put("length", parcelLength);
		parcelMap.put("width", parcelWidth);
		parcelMap.put("weight", parcelWeight);
		Parcel par = Parcel.create(parcelMap);
		test(toAddress, fromAddress, par);
	}
	
	
	@Test
	void test(Address toAddress, Address fromAddress, Parcel par) 
	{
		shipmentMap.put("to_address", toAddress);
		shipmentMap.put("from_address", fromAddress);
		shipmentMap.put("parcel", par);
		try 
		{
			Shipment ship = Shipment.create(shipmentMap);
			List<String> buyCarriers = new ArrayList<String>();
			buyCarriers.add("CanadaPost");
			List<String> buyServices = new ArrayList<String>();
			buyServices.add("RegularParcel");
			ship.buy(ship.lowestRate(buyCarriers, buyServices));
			// Print PNG link
			System.out.println(ship.getPostageLabel());
			// Print Tracking Code
			System.out.println(ship.getTrackingCode());
		} 
		catch (EasyPostException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
