package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.ClientTemp;
import com.ez.wireless.cellphone.capstone.repository.ClientTempRepository;

@Service
public class ClientTempService {

	private ClientTempRepository clientTempRepository;
	
	@Autowired
	public ClientTempService(ClientTempRepository clientTempRepository) {
		this.clientTempRepository = clientTempRepository;
	}
	
	/**
	 * Gets all of the rows from the client_temp table
	 * @return a list of ClientTemp objects
	 */
	public List<ClientTemp> getAllClientTemp() {
		ArrayList<ClientTemp> clientTemps = new ArrayList();
		
		clientTempRepository.findAll().forEach(x -> clientTemps.add(x));
		
		return clientTemps;
	}
	
	/**
	 * Saves the ClientTemp object to the client_temp table.
	 * @param clientTemp the object to be persisted to the database
	 * @return the ClientTemp object if it was persisted successfully. 
	 * @throws IllegalArgumentException if the object wasn't persisted. 
	 */
	public ClientTemp saveClientTemp(ClientTemp clientTemp) throws IllegalArgumentException {
		return clientTempRepository.save(clientTemp);
	}
}
