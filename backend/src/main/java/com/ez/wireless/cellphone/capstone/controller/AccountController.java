package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easypost.exception.EasyPostException;
import com.ez.wireless.cellphone.capstone.dto.AccountPersonRoleDTO;
import com.ez.wireless.cellphone.capstone.dto.ShippingLabelDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.service.AccountService;
import com.ez.wireless.cellphone.capstone.shipping.ShippingLabel;
import com.ez.wireless.cellphone.capstone.shipping.ShippingLabelResponse;

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
	
	@PostMapping(path = "/label")
	public ResponseEntity<?> generateLabel(@RequestBody ShippingLabelDTO sldto) 
	{
		ShippingLabel shippingLabel;
	    //Generate shipping label
		try 
		{
			shippingLabel = new ShippingLabel(sldto.getFromFirstName(), sldto.getFromLastName(), sldto.getFromCompany(), sldto.getFromStreet1(),
					sldto.getFromStreet2(), sldto.getFromCity(), sldto.getFromGeoRegion(), sldto.getFromCountry(),
					sldto.getFromMailCode(), sldto.getFromMessage(), sldto.getFromPhone(), sldto.getFromEmail(),
					sldto.isResidental(), sldto.getPostalService(), sldto.getWeight());
			
			// TODO the shipping label class doesn't throw EasyPost exception. 
			// easy post is thrown and not caught
			ShippingLabelResponse shippingLabelResponse = 
					new ShippingLabelResponse(shippingLabel.ship(sldto.getPostalService()));
			
			return  ResponseEntity.ok(shippingLabelResponse);
		} 
		catch (EasyPostException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Shipping label was not processed");  
	}
	
	@PostMapping(path = "/save")
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
