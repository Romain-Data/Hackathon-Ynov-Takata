package fr.ynov.takata_backend.services.impl;

import org.modelmapper.ModelMapper;

import fr.ynov.takata_backend.dto.UserDto;
import fr.ynov.takata_backend.entities.User;
import fr.ynov.takata_backend.generic.GenericServiceImpl;
import fr.ynov.takata_backend.repositories.UserRepository;
import fr.ynov.takata_backend.services.UserService;

public class UserServiceImpl extends GenericServiceImpl<User, UserDto, Long, UserRepository> implements UserService{

	protected UserServiceImpl(UserRepository repository,
			ModelMapper mapper) {
		super(repository, User.class, UserDto.class, mapper);
		// TODO Auto-generated constructor stub
	}

}
