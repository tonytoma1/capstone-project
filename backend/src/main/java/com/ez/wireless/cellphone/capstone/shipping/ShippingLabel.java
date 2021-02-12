package com.ez.wireless.cellphone.capstone.shipping;

import java.util.HashMap;

import com.shippo.model.Shipment;

public class ShippingLabel 
{
	private HashMap<String, Object> addressToMap;
	private HashMap<String, Object> addressFromMap;
	private HashMap<String, Object> parcelMap;
	private HashMap<String, Object> shipmentMap;
	
	public ShippingLabel(String name, String company, String street, 
			String city, String geoRegion, String country, 
			String mailCode, String phone, String email)
	{
		
	}
	
	
	private Shipment ship()
	{
		//TODO
		return null;
	}
	
	
}
