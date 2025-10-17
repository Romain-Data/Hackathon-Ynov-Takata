package fr.ynov.takata_backend.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import fr.ynov.takata_backend.dto.GameDto;
import fr.ynov.takata_backend.dto.GameResultDto;
import fr.ynov.takata_backend.entities.Game;
import fr.ynov.takata_backend.enums.Team;
import fr.ynov.takata_backend.generic.GenericServiceImpl;
import fr.ynov.takata_backend.repositories.GameRepository;
import fr.ynov.takata_backend.services.GameService;
import jakarta.transaction.Transactional;

@Service
@Transactional
public class GameServiceImpl extends GenericServiceImpl<Game, GameDto, Long, GameRepository> implements GameService {

	public GameServiceImpl(GameRepository repository,
			ModelMapper mapper) {
		super(repository, Game.class, GameDto.class, mapper);
		// TODO Auto-generated constructor stub
	}

	@Override
	public ResponseEntity setScoreByTeam(Team team) {
		
		
		return ResponseEntity.ok(HttpStatus.OK);
	}

	@Override
	public void updateScore(GameResultDto gameResultDto) throws Exception {
		int result = repository.updateScore(gameResultDto.getRed_goal(), gameResultDto.getBleu_goal(), gameResultDto.getBabyfoot_tableId());
		if(result==0) {
			throw new Exception("Erreur: echec de demande de modification de la Game");
		}
	}


}
