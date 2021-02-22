package com.ez.wireless.cellphone.capstone.filter;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.ez.wireless.cellphone.capstone.jwt.JwtTokenUtil;
import com.ez.wireless.cellphone.capstone.jwt.JwtUserDetailsService;

import io.jsonwebtoken.ExpiredJwtException;


/**
 * Verifies the Jwt token on authenticated api endpoints.
 * Reference: https://www.javainuse.com/spring/boot-jwt
 */
@Component
public class JwtRequestFilter extends OncePerRequestFilter {

	@Autowired
	private JwtUserDetailsService jwtUserDetailsService;
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String requestTokenHeader = request.getHeader("Authorization");
		
		String username = null;
		String jwtToken = null;
		// JWT Token is in the form "Bearer token". Remove Bearer word and get
		// only the Token
		if(requestTokenHeader != null &&
		   requestTokenHeader.startsWith("Bearer ")) {
			//jwtToken = requestTokenHeader.substring(7);
			jwtToken = requestTokenHeader.split(" ")[1].trim();
			
			try {
				username = jwtTokenUtil.getUsernameFromToken(jwtToken);
			}
			catch (IllegalArgumentException e) {
				System.out.println("Unable to get JWT token");
				response.sendError(HttpStatus.UNAUTHORIZED.value(), "Unable to get JWT Token");
			}
			catch (ExpiredJwtException e) {
				System.out.println("JWT Token has expired");
				response.sendError(HttpStatus.UNAUTHORIZED.value(), "JWT Token has expired");
			}
		}
		else {
			logger.warn("JWT Token does not begin with Bearer String");
			//response.sendError(HttpStatus.UNAUTHORIZED.value(), "JWT Token does not begin with Bearer String");
		}
		
		// Once we get the token validate it.
		if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = this.jwtUserDetailsService.loadUserByUsername(username);
		
			String role = jwtTokenUtil.getRoleFromToken(jwtToken);
			ArrayList<SimpleGrantedAuthority> roleList = new ArrayList<>();
			roleList.add(new SimpleGrantedAuthority(role));
			
			// if token is valid configure Spring Security to manually set
			// authentication
			if(jwtTokenUtil.validateToken(jwtToken, username)) {
				UsernamePasswordAuthenticationToken upa = new UsernamePasswordAuthenticationToken(
						userDetails, null, roleList);
				
				upa.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				
				// After setting the Authentication in the context, we specify
				// that the current user is authenticated. So it passes the
				// Spring Security Configurations successfully.
				SecurityContextHolder.getContext().setAuthentication(upa);
			}
		}
		filterChain.doFilter(request, response);
	}
}
