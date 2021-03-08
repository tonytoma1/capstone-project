package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.Model;
import com.ez.wireless.cellphone.capstone.repository.ModelRepository;

@Service
public class ModelService {

	@Autowired
	private ModelRepository modelRepository;
	
	
	public List<Model> getAllModels() {
		List<Model> phoneModels = new ArrayList<Model>();
		modelRepository.findAll().forEach(x -> phoneModels.add(x));
		
		return phoneModels;
	}
	
	/**
	 * Saves a phone model to the database
	 * @param model the phone model to be saved.
	 * @return the model that was persisted to the database if the save was successful 
	 */
	public Model saveModel(Model model) {
		return modelRepository.save(model);
	}
	
}
