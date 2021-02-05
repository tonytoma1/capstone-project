package com.ez.wireless.cellphone.capstone.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.repository.AccountRepository;
import com.ez.wireless.cellphone.capstone.service.AccountService;

/**
 * The authentication manager uses this class 
 * to find the user from the database based on the username
 * @author 718707
 *
 */
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private AccountRepository accountRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountRepository.findByUsername(username);
		
		if(account == null) {
			throw new UsernameNotFoundException("The account wasn't found");
		}
		
		// TODO create a new user with the specified roles and return it back to the caller
		
		return null;
	}

}
