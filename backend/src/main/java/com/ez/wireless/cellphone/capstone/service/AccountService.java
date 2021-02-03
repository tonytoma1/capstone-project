package com.ez.wireless.cellphone.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.ez.wireless.cellphone.capstone.repository.AccountRepository;

public class AccountService 
{
	private AccountRepository ar;
	
	@Autowired
	public AccountService(AccountRepository ar)
	{
		this.ar = ar;
	}
	
	//TODO
	/*
	public List<Account> getAllAccounts()
	{
		ArrayList<Account>
	}
	*/
}
