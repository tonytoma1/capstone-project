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
 *
 */
@RestController
//@RequestMapping("/api/register")
public class RegistrationController {

	@Autowired
	private AccountService accountService;
	
	@PostMapping
	public ResponseEntity<?> saveUser(@RequestBody AccountPersonRoleDTO accountPersonRoleDTO) throws Exception {
		
		return ResponseEntity.ok(accountService.saveAccount(accountPersonRoleDTO));
	}
	
}
