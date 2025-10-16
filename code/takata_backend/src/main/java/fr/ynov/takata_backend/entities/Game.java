package fr.ynov.takata_backend.entities;

import java.time.LocalDate;

import fr.ynov.takata_backend.enums.Winner;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Game extends BaseEntity {

	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private LocalDate start_date;
	@Column(nullable = true)
	@Temporal(TemporalType.DATE)
	private LocalDate end_date;
	private int red_goal;
	private int bleu_goal;
	@Column(nullable = false)
	@Enumerated(EnumType .STRING)
	private Winner winner;
}
