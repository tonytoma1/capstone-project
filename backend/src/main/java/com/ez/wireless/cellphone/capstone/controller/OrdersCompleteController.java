package com.ez.wireless.cellphone.capstone.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.OrdersComplete;
import com.ez.wireless.cellphone.capstone.service.OrdersCompleteService;

@RestController
@RequestMapping("/api/orders-complete")
public class OrdersCompleteController 
{
	@Autowired
	private OrdersCompleteService ordersCompleteService;
	
	/**
	 * Gets all of the complete orders from the orders_complete table
	 * @return the orders
	 */
	@GetMapping
	public List<OrdersComplete> getAllOrdersComplete() 
	{
		return ordersCompleteService.getAllOrdersComplete();
	}
	
	/**
	 * Saves a complete order object to the orders_complete table in the database.
	 * @param ordersComplete The complete order
	 */
	@PostMapping
	public void saveOrdersComplete(@RequestBody OrdersComplete ordersComplete) {
		try {
			ordersCompleteService.saveOrdersComplete(ordersComplete);
		}
		catch(IllegalArgumentException e) {
			throw new IllegalArgumentException("Order cannot be saved or processed.");
		}
	}
}
