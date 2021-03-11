package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.model.NewOrders;
import com.ez.wireless.cellphone.capstone.repository.NewOrdersRepository;

@Service
public class NewOrdersService {
	
	@Autowired
	private AccountService accountService;
	
	private NewOrdersRepository newOrdersRepository;
	
	@Autowired
	public NewOrdersService(NewOrdersRepository newOrdersRepository)
	{
		this.newOrdersRepository = newOrdersRepository;
	}
	
	/**
	 * Gets all the rows in the New_Orders table
	 * @return
	 */
	public List<NewOrders> getAllNewOrders()
	{
		List<NewOrders> orders = new ArrayList<>();
		newOrdersRepository.findAll().forEach(x -> orders.add(x));
		return orders;
	}
	
	@GetMapping(path = "user-order")
	public List<NewOrders> getOrdersBasedOnUser(@RequestParam String username) {
		List<NewOrders> orders = new ArrayList<>();
		
		Account foundAccount = accountService.getByUsername(username);
		
		newOrdersRepository.findAll().forEach(x -> {
			if(x.getAccountId() == foundAccount.getAccountId()) {
				orders.add(x);
			}
		});
		
		return orders;
	}
	
	/**
	 * Saves the condition to the New_Orders table
	 * @param newOrders the New Orders
	 * @return The NewOrders if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	@PostMapping
	public NewOrders saveOrders(NewOrders newOrders) throws IllegalArgumentException
	{
		return newOrdersRepository.save(newOrders);
	}
}
