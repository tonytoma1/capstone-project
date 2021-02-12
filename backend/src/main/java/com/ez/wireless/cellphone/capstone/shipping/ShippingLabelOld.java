//In case easypost doesn't work
/**
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
	
	/**
	 * Returns an account for the shippo API that can be set by the user
	 * @return the account map
	 /
	private HashMap<String, Object> account(String accountType)
	{
		HashMap<String, Object> accountMap = new HashMap<String, Object>();
		accountType.toUpperCase();
		switch(accountType)
		{
			case "USPS":
			{
				//TODO
				break;
			}
			case "FEDEX":
			{
				accountMap.put("carrier", "fedex");
				accountMap.put("account_id", "<YOUR-FEDEX-ACCOUNT-NUMBER>"); 
				accountMap.put("parameters", new HashMap<String, Object>() {
				    {
				        put("first_name", "<YOUR_FIRST_NAME>");
				        put("last_name", "YOUR_LAST_NAME");
				        put("phone_number", "<YOUR_PHONE_NUMBER>");
				        put("from_address_st", "<YOUR_STREET_ADDRESS>");
				        put("from_address_city", "<YOUR_CITY>");
				        put("from_address_state", "<YOUR_STATE>");
				        put("from_address_zip", "<YOUR_ZIP>");
				        put("from_address_country_iso2", "<YOUR_COUNTRY>");
				    }
				});
				accountMap.put("test", Boolean.FALSE);
				accountMap.put("active", Boolean.TRUE);
				break;
			}
			default:
			{
				System.out.println("Enter witty message here, but I'm sure we could lock this on the frontend");
			}
		}
		return accountMap;
	}
	
	private Shipment ship()
	{
		//TODO
		return null;
	}
	
}
**/