package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.ClientTemp;
import com.ez.wireless.cellphone.capstone.service.ClientTempService;

/**
 * 
 * @author Dakota Harvey
 */
@RestController
@RequestMapping("/api/client-temp")
public class ClientTempController {

	@Autowired
	private ClientTempService clientTempService;
	
	/**
	 * Retrieves all of the client_temp rows from the database
	 * @return a list of ClientTemp objects
	 */
	@GetMapping
	public List<ClientTemp> getAll() {
		return clientTempService.getAllClientTemp();
	}
	
	/**
	 * Saves a client to the client_temp row in the database
	 * @param clientTemp The temporary Client
	 */
	@PostMapping
	public void saveClientTemp(@RequestBody ClientTemp clientTemp) {
		try {
			clientTempService.saveClientTemp(clientTemp);
		}
		catch(IllegalArgumentException e) {
			throw new IllegalArgumentException("Client Temp couldn't be saved");
		}
		
	}
}
