package com.ez.wireless.cellphone.capstone.shipping;

import java.util.HashMap;
import java.util.Map;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Address;
import com.easypost.model.Parcel;
import com.easypost.model.Shipment;

public class ShippingLabel 
{
	private Map<String, Object> toAddressMap = new HashMap<String, Object>();
	private Map<String, Object> fromAddressMap = new HashMap<String, Object>();
	private Map<String, Object> parcelMap = new HashMap<String, Object>();
	private Map<String, Object> shipmentMap = new HashMap<String, Object>();
					
	
	public ShippingLabel(String name, String company, String street1, String street2, 
			String city, String GeoRegion, String country, String mailCode, String message,
			String phone, String email)
	{
		EasyPost.apiKey = "insert key here";
		shipmentMap.put("from_address", fromAddress(name, company, street1, street2, city, GeoRegion, country, mailCode, message, phone, email));
		
	}
	
	//client
	private Address toAddress()
	{
		Address toAddress = new Address();
		return toAddress;
	}
	
	//customer
	/**
	 * Takes in info passed from the constructor and puts them into a map. Which said map is converted into an address and returned.
	 * Values that are sent as null will not be printed on the label. Only name, company, street1, city, GeoRegion, Country, and mailCode are required.
	 * @param name The name of the person
	 * @param company The company name
	 * @param street1 The street location
	 * @param street2 The second street location
	 * @param city The city name
	 * @param GeoRegion The Geographical Region (E.G. State, Province, Etc.)
	 * @param country The Country Name
	 * @param mailCode The mail code (E.G. Zip code, Postal Code, Etc.)
	 * @param message The message to the recipient
	 * @param phone The Phone number
	 * @param email The email address
	 * @return The senders Address
	 */
	private Address fromAddress(String name, String company, String street1, String street2, 
			String city, String GeoRegion, String country, String mailCode, String message,
			String phone, String email)
	{
		Address fromAddress = new Address();
		fromAddressMap.put("name", name);
		fromAddressMap.put("company", company);
		fromAddressMap.put("street1", street1);
		fromAddressMap.put("street2", street2);
		fromAddressMap.put("city", city);
		fromAddressMap.put("state", GeoRegion);
		fromAddressMap.put("country", country);
		fromAddressMap.put("zip", mailCode);
		fromAddressMap.put("message", message);
		fromAddressMap.put("phone", phone);
		fromAddressMap.put("email", email);
		try 
		{
			Address.create(fromAddressMap);
		} 
		catch (EasyPostException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return fromAddress;
	}
	
	private Parcel parcel()
	{
		return null;
	}
	
	private Shipment ship()
	{
		return null;
	}
	
}
