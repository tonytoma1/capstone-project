package com.ez.wireless.cellphone.capstone.shipping;

import java.util.HashMap;
import java.util.Map;

import com.easypost.EasyPost;
import com.easypost.model.Address;

public class ShippingLabel 
{
	private Map<String, Object> toAddressMap = new HashMap<String, Object>();
	private Map<String, Object> fromAddressMap = new HashMap<String, Object>();
	private Map<String, Object> parcelMap = new HashMap<String, Object>();
	private Map<String, Object> shipmentMap = new HashMap<String, Object>();
	
	public ShippingLabel(String name, String company, String street, 
			String city, String GeoReigon, String country, String mailcode)
	{
		EasyPost.apiKey = "insert key here";
	}
	
	
	private Address toAddress()
	{
		return null;
	}
	
	private Address fromAddress()
	{
		return null;
	}
	
	
}
