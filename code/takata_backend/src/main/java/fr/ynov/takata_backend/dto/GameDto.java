package fr.ynov.takata_backend.dto;

import java.time.Duration;
import java.time.LocalDateTime;

import fr.ynov.takata_backend.enums.Winner;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class GameDto {

	private long id;
	private int version;
	private LocalDateTime start_date;
	private LocalDateTime end_date;
	private Duration duration;
	private int red_goal;
	private int bleu_goal;
	private Winner winner;
	private long babyfoot_tableId;
	
}
