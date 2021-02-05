package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.service.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController 
{
	@Autowired
	private AccountService as;
	
	@GetMapping
	public List<Account> getAll()
	{
		return as.getAllAccounts();
	}
	
	@PostMapping
	public void saveAccount(@RequestBody Account ac)
	{
		try 
		{
			as.saveAccount(ac);
		} 
		catch (IllegalArgumentException e) 
		{
			throw new IllegalArgumentException("Account could not be saved");
		}
	}
}
