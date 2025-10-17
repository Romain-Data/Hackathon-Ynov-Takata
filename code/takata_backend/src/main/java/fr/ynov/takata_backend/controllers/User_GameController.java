package fr.ynov.takata_backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.ynov.takata_backend.dto.User_GameDto;
import fr.ynov.takata_backend.generic.GenericController;
import fr.ynov.takata_backend.services.User_GameService;

@RestController
@RequestMapping("api/user_game")
public class User_GameController extends GenericController<User_GameDto, Long, User_GameService> {

	public User_GameController(User_GameService service) {
		super(service);
		// TODO Auto-generated constructor stub
	}
}
