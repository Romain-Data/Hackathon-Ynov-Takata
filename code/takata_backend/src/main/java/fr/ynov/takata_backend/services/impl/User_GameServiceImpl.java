package fr.ynov.takata_backend.services.impl;

import org.modelmapper.ModelMapper;

import fr.ynov.takata_backend.dto.User_GameDto;
import fr.ynov.takata_backend.entities.User_Game;
import fr.ynov.takata_backend.generic.GenericServiceImpl;
import fr.ynov.takata_backend.repositories.User_GameRepository;
import fr.ynov.takata_backend.services.User_GameService;

public class User_GameServiceImpl extends GenericServiceImpl<User_Game, User_GameDto, Long, User_GameRepository> implements User_GameService{

	protected User_GameServiceImpl(User_GameRepository repository, ModelMapper mapper) {
		super(repository, User_Game.class, User_GameDto.class, mapper);
		// TODO Auto-generated constructor stub
	}

}
