package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.repository.AccountRepository;
import com.ez.wireless.cellphone.capstone.model.Account;

@Service
public class AccountService 
{
	private AccountRepository accountRepository;
	
	@Autowired
	public AccountService(AccountRepository accountRepository)
	{
		this.accountRepository = accountRepository;
	}
	
	/**
	 * Gets all the rows in the account table
	 * @return
	 */
	public List<Account> getAllAccounts()
	{
		List<Account> accounts = new ArrayList<>();
		accountRepository.findAll().forEach(x -> accounts.add(x));
		return accounts;
	}
	
	/**
	 * Returns the account
	 * @param username The username
	 * @return 
	 */
	public Account getByUsername(String username)
	{
		return accountRepository.findByUsername(username);
	}
	
	/**
	 * Saves the Account to the account table
	 * @param account The account
	 * @return The Account if it was successfully saved to the database
	 * @throws IllegalArgumentException if the argument is null
	 */
	public Account saveAccount(Account account) throws IllegalArgumentException
	{
		return accountRepository.save(account);
	}
}