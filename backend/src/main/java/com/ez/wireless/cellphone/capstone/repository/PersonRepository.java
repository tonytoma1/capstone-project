package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.Person;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer> {
	
	Person findByFirstNameAndLastNameAndStreetAddress1(String firstName, String lastName, String streetAddress1);
	Person findById(int id);
}
