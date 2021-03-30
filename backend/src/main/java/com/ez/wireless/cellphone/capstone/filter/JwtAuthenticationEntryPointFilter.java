package com.ez.wireless.cellphone.capstone.filter;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

/**
 * Sends an unauthorized error if the user doesn't have a valid JWT token
 * @author Tony
 * 
 * Referenced from: https://www.javainuse.com/spring/boot-jwt
 */
@Component
public class JwtAuthenticationEntryPointFilter implements AuthenticationEntryPoint, Serializable {

	@Override
	public void commence(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException authException) throws IOException, ServletException {
		response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
		
	}

}
