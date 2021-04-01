package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.OrdersComplete;
import com.ez.wireless.cellphone.capstone.repository.OrdersCompleteRepository;

/**
 * The service for the Orders_Complete table
 * @author Tony Toma
 */
@Service
public class OrdersCompleteService {
	
	private OrdersCompleteRepository ordersCompleteRepository;
	
	
	@Autowired
	public OrdersCompleteService(OrdersCompleteRepository ordersCompleteRepository)
	{
		this.ordersCompleteRepository = ordersCompleteRepository;
	}

	public List<OrdersComplete> getAllOrdersComplete()
	{
		ArrayList<OrdersComplete> ordersComplete = new ArrayList<>();
		ordersCompleteRepository.findAll().forEach(a -> ordersComplete.add(a));
		return ordersComplete;
	}
	/**
	 * Saves OrderComplete to orders_complete table
	 * @param ordersComplete 
	 * @return ordersComplete obj
	 * @throws IllegalArgumentException if it isn't added
	 */
	public OrdersComplete saveOrdersComplete(OrdersComplete ordersComplete) throws IllegalArgumentException
	{
		return ordersCompleteRepository.save(ordersComplete);
	
}
}
