package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.NewOrders;
import com.ez.wireless.cellphone.capstone.service.NewOrdersService;

@RestController
@RequestMapping("/api/new-orders")
public class NewOrdersController {
	
	@Autowired
	private NewOrdersService newOrderService;
	
	/**
	 * Gets all of the new orders from the New_Orders table
	 * @return the new orders
	 */
	@GetMapping
	public List<NewOrders> getAllNewOrders()
	{
		return newOrderService.getAllNewOrders();
	}
	
	/**
	 * Saves a new order object to the New_Orders table in the database.
	 * @param newOrders The new order
	 */
	@PostMapping
	public void saveOrders(@RequestBody NewOrders newOrders)
	{
		try
		{
			newOrderService.saveOrders(newOrders);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException("The New Order Couldn't be save");
		}
	}
	
}
