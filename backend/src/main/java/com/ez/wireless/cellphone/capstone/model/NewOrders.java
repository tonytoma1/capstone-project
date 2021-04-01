package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.model.ClientTemp;

/**
 * The object model for a new order on the database
 * @author Dakota Harvey
 */
@Entity
@Table(name = "New_Orders")
public class NewOrders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "new_orders_sequence")
    @SequenceGenerator(name="new_orders_sequence", sequenceName = "new_orders_sequence", allocationSize = 1)
	@Column(name = "new_order_id")
	private Integer newOrderId;
	
	@OneToOne
	@JoinColumn(name = "client_temp_id")
	private ClientTemp clientTemp;
	
	@OneToOne
	@JoinColumn(name = "account_id")
	private Account account;
	
	@Column(name = "total_price")
	private Double totalPrice;
	
	@OneToOne
	@JoinColumn(name = "device_id")
	private Device devices;
	
	
	
	

	/**
	 * @return the devices
	 */
	public Device getDevices() {
		return devices;
	}

	/**
	 * @param devices the devices to set
	 */
	public void setDevices(Device devices) {
		this.devices = devices;
	}

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

	/**
	 * @return the clientTempId
	 */
	public ClientTemp getClientTemp() {
		return clientTemp;
	}

	/**
	 * @param clientTemp the clientTempId to set
	 */
	public void setClientTemp(ClientTemp clientTemp) {
		this.clientTemp = clientTemp;
	}

	/**
	 * @return the accountId
	 */
	public Account getAccount() {
		return account;
	}

	/**
	 * @param account the accountId to set
	 */
	public void setAccount(Account account) {
		this.account = account;
	}


	
	
	
	
}
