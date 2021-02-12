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
	
	@GetMapping
	public List<OrdersComplete> getAllOrdersComplete() 
	{
		return ordersCompleteService.getAllOrdersComplete();
	}
	
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
