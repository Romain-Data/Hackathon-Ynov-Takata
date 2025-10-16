package fr.ynov.takata_backend.services.impl;

import org.modelmapper.ModelMapper;

import fr.ynov.takata_backend.dto.GameDto;
import fr.ynov.takata_backend.entities.Game;
import fr.ynov.takata_backend.generic.GenericServiceImpl;
import fr.ynov.takata_backend.repositories.GameRepository;
import fr.ynov.takata_backend.services.GameService;

public class GameServiceImpl extends GenericServiceImpl<Game, GameDto, Long, GameRepository> implements GameService {

	protected GameServiceImpl(GameRepository repository,
			ModelMapper mapper) {
		super(repository, Game.class, GameDto.class, mapper);
		// TODO Auto-generated constructor stub
	}


}
