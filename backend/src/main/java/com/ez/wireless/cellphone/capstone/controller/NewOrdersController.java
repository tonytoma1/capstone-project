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
	private NewOrdersService nos;
	
	@GetMapping
	public List<NewOrders> getAllNewOrders()
	{
		return nos.getAllNewOrders();
	}
	
	@PostMapping
	public void saveOrders(@RequestBody NewOrders no)
	{
		try
		{
			nos.saveOrders(no);
		}
		catch(IllegalArgumentException e)
		{
			throw new IllegalArgumentException("The New Order Couldn't be save");
		}
	}
	
}
