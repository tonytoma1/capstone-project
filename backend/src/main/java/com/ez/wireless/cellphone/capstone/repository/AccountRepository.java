package com.ez.wireless.cellphone.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ez.wireless.cellphone.capstone.model.Account;

@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {
	Account findByUsername(String username);
	
	Account findByUuid(String uuid);
}
