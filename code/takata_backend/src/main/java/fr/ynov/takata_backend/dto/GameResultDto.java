package fr.ynov.takata_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class GameResultDto {
	private int red_goal;
	private int bleu_goal;
	private long babyfoot_tableId;
}
