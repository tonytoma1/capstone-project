package com.ez.wireless.cellphone.capstone.shipping;

/**
 * Forms a JSON response that includes the url to the shipping label.
 * @author 718707
 *
 */
public class ShippingLabelResponse {

	private String shippingLabelUrl;
	
	public ShippingLabelResponse(String shippingLabelUrl) {
		this.shippingLabelUrl = shippingLabelUrl;
	}
	
	public String getShippingLabelUrl() {
		return this.shippingLabelUrl;
	}
}
