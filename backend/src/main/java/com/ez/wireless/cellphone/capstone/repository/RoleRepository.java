package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.Role;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {

}
