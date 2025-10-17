package fr.ynov.takata_backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.ynov.takata_backend.dto.UserDto;
import fr.ynov.takata_backend.generic.GenericController;
import fr.ynov.takata_backend.services.UserService;

@RestController
@RequestMapping("api/user")
public class UserController extends GenericController<UserDto, Long, UserService> {

	public UserController(UserService service) {
		super(service);
		// TODO Auto-generated constructor stub
	}

}
