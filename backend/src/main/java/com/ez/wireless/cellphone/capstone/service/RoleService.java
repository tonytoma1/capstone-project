package com.ez.wireless.cellphone.capstone.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.Role;
import com.ez.wireless.cellphone.capstone.repository.RoleRepository;

/**
 * The service for the role table
 * @author Dakota Harvey
 */
@Service
public class RoleService {

	@Autowired
	private RoleRepository roleRepository;
	
	/**
	 * Retrieves all of the roles in the database as a list
	 * @return a List of roles
	 */
	public List<Role> getAllRoles() {
		ArrayList<Role> roles = new ArrayList<Role>();
		
		roleRepository.findAll().forEach(x -> roles.add(x));
		
		return roles;
	}
	
	/**
	 * Saves a Role to the database.
	 * @param role the role to be persisted
	 * @return the Role object if it was saved successfully. If not,
	 * an exception will be thrown.
	 * @throws IllegalArgumentException when the role wasn't saved successfully 
	 * to the database. For example, the role was null and therefore an error was thrown.
	 */
	public Role saveRole(Role role) throws IllegalArgumentException {
		return roleRepository.save(role);
	}
}
