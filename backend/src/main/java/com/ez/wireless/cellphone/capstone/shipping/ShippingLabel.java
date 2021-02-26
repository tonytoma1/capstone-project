package com.ez.wireless.cellphone.capstone.shipping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.easypost.EasyPost;
import com.easypost.exception.EasyPostException;
import com.easypost.model.Address;
import com.easypost.model.Parcel;
import com.easypost.model.Shipment;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.service.AccountService;

public class ShippingLabel 
{
	private Map<String, Object> toAddressMap = new HashMap<String, Object>();
	private Map<String, Object> fromAddressMap = new HashMap<String, Object>();
	private Map<String, Object> parcelMap = new HashMap<String, Object>();
	private Map<String, Object> shipmentMap = new HashMap<String, Object>();
	//private AccountService as;
	
	//TODO implement proper calling of the client account from the account object
	//private Account ac = ac.getAccountId();
					
	
	public ShippingLabel(String Fname, String Lname, String company, String street1, String street2, 
			String city, String GeoRegion, String country, String mailCode, String message,
			String phone, String email, boolean residental, String postalService, double weight) throws EasyPostException
	{
		EasyPost.apiKey = "EZTK49ff1046f34b4161b5d4531cd632f2c6PqxVBYFGS0cXZpSKqWSIbQ";
		shipmentMap.put("from_address", fromAddress(Fname, Lname, company, street1, street2, city, GeoRegion, country, mailCode, message, phone, email, residental));
		//shipmentMap.put("to_address", toAddress(ac));
		shipmentMap.put("to_address", toAddress());
		shipmentMap.put("parcel", parcel(postalService, weight)); //weight is in lb and not sure if it's going to by dynamic or not
	}
	
	//client from database
	/**
	 * Takes in the client info from the database into a map, then converted into an address then returned.
	 * @param ac the clients account in shorthand form
	 * @return the client's address
	 * @throws EasyPostException as info is assumed to be correct in the database
	 */
	private Address toAddress(/*Account ac*/) throws EasyPostException
	{
		toAddressMap.put("name", "Frank Yakou");
		toAddressMap.put("company", "Recommerse");
		toAddressMap.put("street1", "2958 C Street");
		toAddressMap.put("city", "Los Angeles");
		toAddressMap.put("state", "CA");
		toAddressMap.put("country", "US");
		toAddressMap.put("zip", 1234567);
		toAddressMap.put("phone", 1234567890);
		toAddressMap.put("email", "example@example.com");
		toAddressMap.put("residential", false);
		Address toAddress = Address.create(toAddressMap);
		
		//TODO
//		toAddressMap.put("name", ac.getPerson().getFirstName() + " " + ac.getPerson().getLastName());
//		toAddressMap.put("company", ac.getPerson().getCompany());
//		toAddressMap.put("street1", ac.getPerson().getStreetAddress1());
//		toAddressMap.put("street2", ac.getPerson().getStreetAddress2());
//		toAddressMap.put("city", ac.getPerson().getCity());
//		toAddressMap.put("state", ac.getPerson().getState());
//		toAddressMap.put("country", ac.getPerson().getCountry());
//		toAddressMap.put("zip", ac.getPerson().getZip());
//		toAddressMap.put("phone", ac.getPerson().getPhone());
//		toAddressMap.put("email", ac.getPerson().getEmail());
//		toAddressMap.put("residential", ac.getPerson().isResidental());
		return toAddress;
	}
	
	//customer
	/**
	 * Takes in info passed from the constructor and puts them into a map. Which said map is converted into an address and returned.
	 * Values that are sent as null will not be printed on the label. Only name, company, street1, city, GeoRegion, Country, and mailCode are required.
	 * @param Fname The first name of the person
	 * @param Lname The last name of the person
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
	 * @param residential if the person is shipping from a residence
	 * @return The senders Address
	 */
	private Address fromAddress(String Fname, String Lname, String company, String street1, String street2, 
			String city, String GeoRegion, String country, String mailCode, String message,
			String phone, String email, boolean residental)
	{
		fromAddressMap.put("name", Fname + " " + Lname);
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
		fromAddressMap.put("residential", residental);
		try 
		{
			Address fromAddress = Address.create(fromAddressMap);
			return fromAddress;
		} 
		catch (EasyPostException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * Takes in a postal service identifier as well as the parcel's weight.
	 * It puts said information into a map and returns a parcel. Postal service identifiers are located at https://www.easypost.com/docs/api/java#carrier-tracking-strings
	 * @param postalService postal service identifier 
	 * @param weight parcel weight
	 * @return the parcel
	 */
	private Parcel parcel(String postalService, double weight)
	{
		switch(postalService)
		{
			//for future cases refer to https://www.easypost.com/docs/api/java#carrier-tracking-strings for postalService
			case "USPS":
			{
				parcelMap.put("predefined_package", "SmallFlatRateBox");
				parcelMap.put("weight", weight);
				break;
			}
			default:
			{
				//assume USPS is default
				parcelMap.put("predefined_package", "SmallFlatRateBox");
				parcelMap.put("weight", weight);
				break;
			}
			
		}
		try 
		{
			Parcel parcel = Parcel.create(parcelMap);
			return parcel;
		} 
		catch (EasyPostException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	/**
	 * Takes in a postal service identifier and the shipping map fields, then uses said information to generate
	 * a png image of the shipping label. Postal service identifiers are located at https://www.easypost.com/docs/api/java#carrier-tracking-strings
	 * @param postalService postal service identifier
	 * @return the shipping label image
	 */
	public String ship(String postalService)
	{
		switch(postalService)
		{
			//for future cases refer to https://www.easypost.com/docs/api/java#carrier-tracking-strings for postalService
			case "USPS":
			{
				try 
				{
					Shipment ship = Shipment.create(shipmentMap);
					List<String> buyCarriers = new ArrayList<String>();
					buyCarriers.add(postalService);
					List<String> buyServices = new ArrayList<String>();
					buyServices.add("Express");
					ship.buy(ship.lowestRate(buyCarriers, buyServices));
					return ship.getPostageLabel().getLabelUrl();
				} 
				catch (EasyPostException e) 
				{
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			}
		}
		return null;
	}
}
