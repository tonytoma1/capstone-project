package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ez.wireless.cellphone.capstone.model.Person;
import com.ez.wireless.cellphone.capstone.repository.PersonRepository;

/**
 * The service for the Person table
 * @author Tony Toma
 */
@Service
public class PersonService {

	@Autowired
	private PersonRepository personRepository;
	
	/**
	 * Gets all the rows from the person table
	 * @return A list of Person objects.
	 */
	public List<Person> getAllPerson() {
		ArrayList<Person> personList = new ArrayList<Person>();
		
		personRepository.findAll().forEach(x -> personList.add(x));
		
		return personList;
	}
	
	
	public Person findPerson(Person person) {
		return personRepository.findByFirstNameAndLastNameAndStreetAddress1(person.getFirstName(), person.getLastName(), person.getStreetAddress1());
	}
	
	/**
	 * Saves the person to the person table
	 * @param person to be saved to the table
	 * @return the person object if it was successfully saved.
	 */
	public Person savePerson(Person person) {
		return personRepository.save(person);
	}
	
	public boolean deletePersonById(int id) {
		Person person = personRepository.findById(id);
		personRepository.delete(person);
		
		return true;
	}
}
