package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.repository.AccountRepository;
import com.ez.wireless.cellphone.capstone.repository.PersonRepository;
import com.ez.wireless.cellphone.capstone.repository.RoleRepository;
import java.util.Optional;
import com.ez.wireless.cellphone.capstone.dto.AccountPersonRoleDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.model.Person;
import com.ez.wireless.cellphone.capstone.model.Role;

@Service
public class AccountService 
{
	private AccountRepository accountRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired 
	private PersonRepository personRepository;
	
	@Autowired
	private PasswordEncoder bcryptPasswordEncoder;
	
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
	public Account saveAccount(AccountPersonRoleDTO accountDTO) throws IllegalArgumentException
	{
		// TODO check if value was returned
		Optional<Role> userRole = roleRepository.findById(accountDTO.getRoleId());
		Optional<Person> person = personRepository.findById(accountDTO.getPersonId());
		// TODO Get person
		
		// TODO error handling when person or userRole not found.
		Account account = new Account();
		//account.setAccountId(null);
		account.setPerson(person.get());
		account.setRole(userRole.get());
		account.setUsername(accountDTO.getUsername());
		account.setPassword(bcryptPasswordEncoder.encode(accountDTO.getPassword()));
	
		return accountRepository.save(account);
	}
	
	public Account updateAccount(Account account) {
		return accountRepository.save(account);
	}
}