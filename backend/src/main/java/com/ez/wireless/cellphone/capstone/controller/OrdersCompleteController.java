package com.ez.wireless.cellphone.capstone.controller;
import java.util.List;


public class OrdersCompleteController 
{

	private OrdersCompleteService ordersCompleteService
	
	@GetMapping
	public List<ClientOrders> getAll() 
	{
		return ordersCompleteService.getAllClientOrders();
	}
	
	@PostMapping
	publi void saveOrdersComplete(@RequestBody OrdersComplete ordersComplete)
	try {
		ordersCompleteService(ordersComplete);
	}
	catch(IllegalArgumentException e) {
		throw new IllegalArgumentException("Order cannot be saved or processed.");
	}
	
}
