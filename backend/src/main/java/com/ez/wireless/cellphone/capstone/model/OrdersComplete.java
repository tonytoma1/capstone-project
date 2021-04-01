package com.ez.wireless.cellphone.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The object model for an complete order on the database.
 * @author Dakota Harvey
 */
@Entity
@Table(name = "orders_complete")
public class OrdersComplete {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "orders_complete_sequence")
	@SequenceGenerator(name="orders_complete_sequence", sequenceName = "orders_complete_sequence", allocationSize = 1)
	@Column(name = "orders_complete_id")
	private Integer ordersCompleteId;
	
	@Column(name = "new_orders_id")
	private Integer newOrdersId;
	
	
	/**
	 * @return the OrdersCompleteId
	 */
	public Integer getOrdersCompleteId() 
	{
		return ordersCompleteId;
	}
	
	/**
	 * @param ordersSetId Set value of ordersCompleteId
	 */
	private void setOrdersCompleteId(Integer ordersSetId)
	{
		this.ordersCompleteId = ordersCompleteId;
	}
	

	
}
