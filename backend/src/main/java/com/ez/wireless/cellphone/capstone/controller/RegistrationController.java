package com.ez.wireless.cellphone.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.dto.AccountPersonRoleDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.service.AccountService;

/**
 * Registers a user to the database
 * @author Tony 
 */
@RestController
//@RequestMapping("/api/register")
public class RegistrationController 
{
	@Autowired
	private AccountService accountService;
	
	/**
	 * Saves a user to the account, person, and role tables
	 * @param accountPersonRoleDTO The account, person, and role data transfer object
	 * @return A response for a successful save to the database
	 * @throws Exception
	 */
	@PostMapping
	public ResponseEntity<?> saveUser(@RequestBody AccountPersonRoleDTO accountPersonRoleDTO) throws Exception {
		
		return ResponseEntity.ok(accountService.saveAccount(accountPersonRoleDTO));
	}
	
}
