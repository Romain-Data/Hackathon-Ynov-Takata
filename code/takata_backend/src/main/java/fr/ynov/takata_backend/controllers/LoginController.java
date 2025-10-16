package fr.ynov.takata_backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.ynov.takata_backend.services.UserService;

@RestController
@RequestMapping("login")
public class LoginController {
    private final UserService service;
	
	public LoginController(UserService service) {
		this.service = service;
	}
	
    
}
