package fr.ynov.takata_backend.services;

import org.springframework.http.ResponseEntity;

import fr.ynov.takata_backend.dto.GameDto;
import fr.ynov.takata_backend.dto.GameResultDto;
import fr.ynov.takata_backend.enums.Team;
import fr.ynov.takata_backend.generic.GenericService;

public interface GameService extends GenericService<GameDto, Long> {

	ResponseEntity setScoreByTeam(Team team);
	void updateScore(GameResultDto gameResultDto) throws Exception;
}
