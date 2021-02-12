package com.ez.wireless.cellphone.capstone.jwt;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/*
 * The JwtTokenUtil is responsible for performing JWT operations 
 * like creation and validation.
 * It makes use of the io.jsonwebtoken.Jwts for achieving this. 
 * 
 * Referenced from this guide: https://www.javainuse.com/spring/boot-jwt
 */
@Component
public class JwtTokenUtil implements Serializable{
	
	public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
	
	@Value("${jwt.secret}")
	private String secret;
	
	//Retrieve username from jwt token
	public String getUsernameFromToken(String token) {
		return getClaimFromToken(token, Claims::getSubject);
	}
	
	public String getRoleFromToken(String token) {
		Claims claims = getAllClaimsFromToken(token);
		String role = (String) claims.get("role");
		
		return role;
	}
	
	//Retrieve expiration date from jwt token
	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}
	
	//check if the token has expired
	public Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}
	
	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}
	
	// For retrieving any information from token we will need the secret key
	private Claims getAllClaimsFromToken(String token) {
		return Jwts.parser().setSigningKey(secret).parseClaimsJws(token)
				.getBody();
	}
	
	//Generates token from the user, but it requires the username as a 
	// string for the second argument since the UserDetails service
	// encrypts the username.
	public String generateToken(UserDetails userDetails, String username) { 
		Map<String, Object> claims = new HashMap<>();
		claims.put("role", getFirstRoleFromUserDetails(userDetails));
		claims.put("username", userDetails.getUsername().toString());
		
		return doGenerateToken(claims, username);
	}
	
	//generate token from user
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("role", getFirstRoleFromUserDetails(userDetails));
		
		return doGenerateToken(claims, userDetails.getUsername());
	}
	
	
	//while creating the token -
	//1. Define  claims of the token, like Issuer, Expiration, Subject, and the ID
	//2. Sign the JWT using the HS512 algorithm and secret key.
	//3. According to JWS Compact Serialization(https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
	//   compaction of the JWT to a URL-safe string 
	private String doGenerateToken(Map<String, Object> claims, String subject) {
		return Jwts.builder().setClaims(claims)
					  .setSubject(subject)
					  .setIssuedAt(new Date(System.currentTimeMillis()))
					  .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
					  .signWith(SignatureAlgorithm.HS512, secret)
					  .compact();
	}

	// Validate token
	// TODO not validating properly
	public Boolean validateToken(String token, UserDetails userDetails) {
		final String username = getUsernameFromToken(token);
		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
	}
	
	public Boolean validateToken(String token, String username) {
		String foundUsername = getUsernameFromToken(token);
		
		return (foundUsername.equals(username) && !isTokenExpired(token));
	}
	
	/**
	 * Only retrieves the first role from the UserDetails list
	 * @param userDetails
	 * @return
	 */
	public String getFirstRoleFromUserDetails(UserDetails userDetails) {
		String role = null;
		Iterator it = userDetails.getAuthorities().iterator();
		role = it.next().toString();
		
		return role;
	}

}
