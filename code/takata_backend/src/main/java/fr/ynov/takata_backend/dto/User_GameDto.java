package fr.ynov.takata_backend.dto;

import fr.ynov.takata_backend.enums.RoleGame;
import fr.ynov.takata_backend.enums.Team;

public class User_GameDto {

	private int version;
	private long userId;
	private long gameId;
	private Team team;
	private RoleGame role;
	
}
