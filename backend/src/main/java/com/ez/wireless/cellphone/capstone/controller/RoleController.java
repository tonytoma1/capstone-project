package com.ez.wireless.cellphone.capstone.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ez.wireless.cellphone.capstone.model.Role;
import com.ez.wireless.cellphone.capstone.service.RoleService;

/**
 * Responsible for the roles for the front end.
 * @author Dakota Harvey
 */
@RestController
@RequestMapping("/api/role")
public class RoleController {

	@Autowired
	private RoleService roleService;
	
	/**
	 * Retrieves all of the roles from the database
	 * @return a list of roles
	 */
	@GetMapping
	public List<Role> getAllRoles() {
		return roleService.getAllRoles();
	}
	
	/**
	 * Saves the Role to the database
	 * @param role the role to be persisted
	 * @throws IllegalArgumentException when the role wasn't persisted successfully
	 */
	@PostMapping
	public void saveRole(@RequestBody Role role) throws IllegalArgumentException {
		try {
			roleService.saveRole(role);
		}
		catch (IllegalArgumentException e) {
			throw new IllegalArgumentException("The Role wasn't save successfully");
		}
	}
	
}
