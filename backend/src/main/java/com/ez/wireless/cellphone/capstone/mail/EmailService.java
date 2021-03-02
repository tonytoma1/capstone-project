package com.ez.wireless.cellphone.capstone.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailService  {

	@Autowired
	private JavaMailSender javaMailSender;
	
	
	
	public void sendForgetPasswordLink(String toEmail, String uuid, String url) {
		
		String completedUrl = url + "?uuid=" + uuid;
		
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(toEmail);
		message.setSubject("Reset Password Recommerce");
		message.setText("Click this link to reset password: " + completedUrl);
		
		try {
			javaMailSender.send(message);
		}
		catch(Exception e) {
			System.out.println("fail");
		}
		
		
	}
}
