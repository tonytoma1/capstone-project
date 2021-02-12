package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "New_Orders")
public class NewOrders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "new_orders_sequence")
    @SequenceGenerator(name="new_orders_sequence", sequenceName = "new_orders_sequence", allocationSize = 1)
	@Column(name = "new_order_id")
	private Integer newOrderId;
	
	@Column(name = "client_temp_id")
	private Integer clientTempId;
	
	@Column(name = "account_id")
	private Integer accountId;
	
	@Column(name = "total_price")
	private Double totalPrice;

	/**
	 * @return the newOrderId
	 */
	public Integer getNewOrderId() {
		return newOrderId;
	}
	
	/**
	 * @param newOrderId the newOrderId to set
	 */
	public void setNewOrderId(Integer newOrderId) {
		this.newOrderId = newOrderId;
	}
	
	/**
	 * @return the clientTempId
	 */
	public Integer getClientTempId() {
		return clientTempId;
	}
	
	/**
	 * @param clientTempId the clientTempId to set
	 */
	public void setClientTempId(Integer clientTempId) {
		this.clientTempId = clientTempId;
	}

	/**
	 * @return the accountId
	 */
	public Integer getAccountId() {
		return accountId;
	}
	
	/**
	 * @param accountId the accountId to set
	 */
	public void setAccountId(Integer accountId) {
		this.accountId = accountId;
	}

	/**
	 * @return the totalPrice
	 */
	public Double getTotalPrice() {
		return totalPrice;
	}

	/**
	 * @param totalPrice the totalPrice to set
	 */
	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	
}
