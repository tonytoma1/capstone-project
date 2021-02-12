package com.ez.wireless.cellphone.capstone.jwt;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ez.wireless.cellphone.capstone.model.Account;
import com.ez.wireless.cellphone.capstone.repository.AccountRepository;
import com.ez.wireless.cellphone.capstone.service.AccountService;

/**
 * 
 * 
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
		
		User user = new User(account.getPassword(), account.getPassword(),
				generateAuthorities(account));
		
		return user;
	}
	
	
	/**
	 * Generates a list of granted authorities based on the roles the user has 
	 * @param userAccount the user's account
	 * @return a list of granted authorities
	 */
	public Collection<? extends GrantedAuthority> generateAuthorities(Account userAccount) { 
		ArrayList<GrantedAuthority> list = new ArrayList<>();
		String roleName = "ROLE_" + userAccount.getRole().getRoleName();
		list.add(new SimpleGrantedAuthority(roleName));
		
		return list;
		
	}

}
