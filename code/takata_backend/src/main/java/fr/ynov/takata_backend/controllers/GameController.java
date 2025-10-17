package fr.ynov.takata_backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.ynov.takata_backend.dto.GameDto;
import fr.ynov.takata_backend.generic.GenericController;
import fr.ynov.takata_backend.services.GameService;

@RestController
@RequestMapping("api/game")
public class GameController extends GenericController<GameDto, Long, GameService> {

	public GameController(GameService service) {
		super(service);
		// TODO Auto-generated constructor stub
	}

}
