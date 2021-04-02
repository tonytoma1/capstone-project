package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.Person;
import com.ez.wireless.cellphone.capstone.service.PersonService;

/**
 * Responsible for the persons for the front end.
 * @author Tony Toma
 */
@RestController
@RequestMapping("/api/person")
public class PersonController {

	@Autowired
	private PersonService personService;
	
	/**
	 * Retrieves all of the rows from the person table
	 * @return a list of Person objects
	 */
	@GetMapping
	public List<Person> getAllPerson() {
		return personService.getAllPerson();
	}
	
	/**
	 * Persist the person object to the person table.
	 * @param person object to be persisted
	 * @return the person object if it was saved successfully
	 * @throws IllegalArgumentException if the person object wasn't saved 
	 * successfully 
	 */
	@PostMapping
	public Person savePerson(@RequestBody Person person) throws IllegalArgumentException {
		try {
			return personService.savePerson(person);
		}
		catch(IllegalArgumentException e) {
			throw new IllegalArgumentException("Person wasn't saved");
		}
		
	}
	
	
	@PostMapping(path = "/person/{id}")
	public ResponseEntity<?> deletePersonById(@RequestParam Integer id) {
		personService.deletePersonById(id);
		
		return ResponseEntity.ok("Person deleted");
	}
}
