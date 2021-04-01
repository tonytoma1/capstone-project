package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.easypost.exception.EasyPostException;

import com.ez.wireless.cellphone.capstone.dto.AccountDTO;
import com.ez.wireless.cellphone.capstone.dto.AccountPersonDTO;

import com.ez.wireless.cellphone.capstone.dto.AccountPersonRoleDTO;
import com.ez.wireless.cellphone.capstone.dto.ShippingLabelDTO;
import com.ez.wireless.cellphone.capstone.dto.UUIDEmailDTO;
import com.ez.wireless.cellphone.capstone.dto.UpdateAccountDTO;
import com.ez.wireless.cellphone.capstone.dto.UpdatePasswordDTO;
import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.service.AccountService;
import com.ez.wireless.cellphone.capstone.service.NewOrdersService;
import com.ez.wireless.cellphone.capstone.shipping.ShippingLabel;
import com.ez.wireless.cellphone.capstone.shipping.ShippingLabelResponse;

/**
 * 
 * @author Tony Toma
 */
@RestController
@RequestMapping("/api/account")
public class AccountController 
{
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private NewOrdersService newOrdersService;
	
	@Autowired
    private JavaMailSender javaMailSender;
	
	/**
	 * Gets all of the accounts from the database when called with the /all URL map.
	 * @return the account service
	 */
	@GetMapping(path = "/all")
	public List<Account> getAll()
	{
		return accountService.getAllAccounts();
	}
	
	/**
	 * Gets a specific account when provided with a username.
	 * @param username The Username
	 * @return the account service
	 */
	@GetMapping
	public Account getAccount(@RequestParam("username") String username)
	{
		return accountService.getByUsername(username);
	}
	
	/**
	 * Generates a shipping label with information provided from the front end with the call of /label URL map. 
	 * @param sldto Shipping Label Data Transfer Object
	 * @return the shipping label
	 */
	@PostMapping(path = "/label")
	public ResponseEntity<?> generateLabel(@RequestBody ShippingLabelDTO sldto) 
	{
		//Generate shipping label

		ShippingLabel shippingLabel;
		sldto.setPostalService("USPS");
		sldto.setWeight(5);

		try 
		{
			shippingLabel = new ShippingLabel(sldto.getFromFirstName(), sldto.getFromLastName(), 
					sldto.getFromCompany(), sldto.getFromStreet1(),
					sldto.getFromStreet2(), sldto.getFromCity(), 
					sldto.getFromGeoRegion(), sldto.getFromCountry(),
					sldto.getFromMailCode(), sldto.getFromMessage(), 
					sldto.getFromPhone(), sldto.getFromEmail(),
					sldto.isResidental(), sldto.getPostalService(), sldto.getWeight());
			
			ShippingLabelResponse shippingLabelResponse = 
					new ShippingLabelResponse(shippingLabel.ship(sldto.getPostalService()));
			
			// TODO Shipping label didn't throw an error. Submit the orders in new orders
			newOrdersService.saveOrders(sldto);
			
			return  ResponseEntity.ok(shippingLabelResponse);
		} 
		catch (EasyPostException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Shipping label was not processed");  
	}
	
	/**
	 * Saves an account to the database when the /save URL file path is called.
	 * @param ac Account Person Role Data Transfer Object
	 */
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
	
//	/**
//	 * Saves the UUID into an account
//	 * @param uuid The uuid that will be persisted into the database.
//	 * @param username the username of the user.
//	 */
//	@PostMapping(path = "/uuid")
//	public void insertUserUUID(@RequestParam(name = "resetUUID") String resetUUID, @RequestParam(name = "username") String username) {
//		// Get the user's account based on the username
//		System.out.println(resetUUID);
//		System.out.println(username);
//		// Persist the UUID into the database
//		
//		// throw an exception if the UUID wasn't persisted.
//	}
	
	/**
	 * Saves the UUID into an account
	 * @param uuid The uuid that will be persisted into the database.
	 * @param username the username of the user.
	 */
	@PostMapping(path = "/uuid")
	public void insertUserUUID(@RequestBody AccountDTO ac) {
		// Get the user's account based on the username
		System.out.println(ac.getUuid());
		System.out.println(ac.getUsername());
		Account foundAccount = accountService.getByUsername(ac.getUsername());
		foundAccount.setUuid(ac.getUuid());
		
		try
		{
			// Persist the UUID into the database
			accountService.updateAccount(foundAccount);
		}
		catch (IllegalArgumentException e) 
		{
			// throw an exception if the UUID wasn't persisted.
			throw new IllegalArgumentException("Account could not be saved");
		}
		
		// Send mail
		String websiteUrl = "http://localhost:3000/change-password?uuid=" + ac.getUuid() + "&email=" + ac.getUsername();
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(ac.getUsername());
		msg.setSubject("Reset password");
		msg.setText("Click here to reset password: " + websiteUrl);
		
		javaMailSender.send(msg);
	}
	
	/**
	 * Updates the password on a account when /updatepassword URL filepath is called.
	 * @param updatePasswordDto Update Password Data Transfer Object
	 */
	@PostMapping(path = "/updatepassword")
	public void updatePassword(@RequestBody UpdatePasswordDTO updatePasswordDto) {
		Account foundAccount = 
				accountService.getByUuidAndUsername(updatePasswordDto.getUuid(), updatePasswordDto.getEmail());
		
		//Account foundAccount = accountService.getByUsername(updatePasswordDto.getEmail());
		
		
		foundAccount.setPassword(updatePasswordDto.getPassword());
		
		accountService.updateAccount(foundAccount);
		
	}

	/**
	 * Registers a user to a account when the /register URL filepath is called.
	 * @param apDTO The account person data transfer object
	 */
	@PostMapping(path = "/register")
	public void registerUser(@RequestBody AccountPersonDTO apDTO)
	{
		try
		{
			accountService.createAccount(apDTO);
		}
		catch (IllegalArgumentException e) 
		{
			// throw an exception if the UUID wasn't persisted.
			throw new IllegalArgumentException("Account could not be saved");
		}

	}
	
	@PostMapping(path = "/update-account/{id}")
	public void updateUser(@PathVariable Long id, @RequestBody UpdateAccountDTO updateAccountDTO) {
		//Account account = accountService.get
	}
}
