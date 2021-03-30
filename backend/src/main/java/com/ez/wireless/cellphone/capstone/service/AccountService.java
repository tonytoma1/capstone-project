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

import com.ez.wireless.cellphone.capstone.dto.AccountPersonDTO;
import com.ez.wireless.cellphone.capstone.dto.AccountPersonRoleDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.model.Person;
import com.ez.wireless.cellphone.capstone.model.Role;

/**
 * The service for the account table on the database
 * @author Dakota Harvey
 */
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
	
	public Account getByUuid(String uuid) {
		return accountRepository.findByUuid(uuid);
	}
	
	public Account getByUuidAndUsername(String uuid, String username) {
		return accountRepository.findByUuidAndUsername(uuid, username);
	}
	
	public Account getByAccountId(Long accountId) {
		return accountRepository.findByAccountId(accountId);
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
		account.setPassword(bcryptPasswordEncoder.encode(account.getPassword()));
		return accountRepository.save(account);
	}

	/**
	 * Creates an account and puts it on the account table
	 * @param apDTO Account data transfer object
	 * @return The account if it was successfully saved to the database 
	 */
	public Account createAccount(AccountPersonDTO apDTO)
	{
		Person per = new Person();
		Account acc = new Account();
		Role role = null;
		
		System.out.println(apDTO.getPassword());
		
		per.setFirstName(apDTO.getFirstName());
		per.setLastName(apDTO.getLastName());
		per.setCompany(apDTO.getCompany());
		per.setEmail(apDTO.getEmail());
		per.setCity(apDTO.getCity());
		per.setCountry(apDTO.getCountry());
		per.setStreetAddress1(apDTO.getStreetAddress1());
		per.setStreetAddress2(apDTO.getStreetAddress2());
		per.setPhone(apDTO.getPhone());
		per.setResidentially(apDTO.isResidental());
		per.setZip(apDTO.getZip());
		
		Person person = personRepository.save(per);
		
		acc.setPerson(person);
		acc.setRole(roleRepository.findByRoleName("USER"));
		acc.setUsername(apDTO.getEmail());
		acc.setPassword(bcryptPasswordEncoder.encode(apDTO.getPassword()));
		return accountRepository.save(acc);

	}
}