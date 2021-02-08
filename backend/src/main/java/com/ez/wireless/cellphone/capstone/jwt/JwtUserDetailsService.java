package com.ez.wireless.cellphone.capstone.jwt;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.repository.AccountRepository;
import com.ez.wireless.cellphone.capstone.service.AccountService;

/**
 * The authentication manager uses this class 
 * to find the user from the database based on the username
 * @author Tony
 *
 */
@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private AccountService accountService;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = accountService.getByUsername(username);
		
		if(account == null) {
			throw new UsernameNotFoundException("The account wasn't found");
		}
		
		// TODO create a new user with the specified roles and return it back to the caller
		// TODO get roles for this user
		User user = new User(account.getPassword(), account.getPassword(), new ArrayList<>());
		return user;
	}

}
