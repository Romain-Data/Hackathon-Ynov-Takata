package fr.ynov.takata_backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import fr.ynov.takata_backend.dto.UserDto;
import fr.ynov.takata_backend.entities.User;
import fr.ynov.takata_backend.generic.GenericServiceImpl;
import fr.ynov.takata_backend.repositories.UserRepository;
import fr.ynov.takata_backend.services.UserService;
import jakarta.transaction.Transactional;
@Service
@Transactional
public class UserServiceImpl extends GenericServiceImpl<User, UserDto, Long, UserRepository> implements UserService{

	public UserServiceImpl(UserRepository repository,
			ModelMapper mapper) {
		super(repository, User.class, UserDto.class, mapper);
		// TODO Auto-generated constructor stub
	}

}
