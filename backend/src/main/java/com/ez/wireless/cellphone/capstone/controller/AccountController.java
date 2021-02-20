package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.dto.AccountPersonRoleDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.service.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController 
{
	@Autowired
	private AccountService accountService;
	
	@GetMapping(path = "/all")
	public List<Account> getAll()
	{
		return accountService.getAllAccounts();
	}
	
	@GetMapping
	public Account getAccount(@RequestParam("username") String username)
	{
		return accountService.getByUsername(username);
	}
	
	@PostMapping
	public void saveAccount(@RequestBody AccountPersonRoleDTO ac)
	{
		try 
		{
			accountService.saveAccount(ac);
		} 
		catch (IllegalArgumentException e) 
		{
			throw new IllegalArgumentException("Account could not be saved");
		}
	}
}
