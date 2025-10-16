package fr.ynov.takata_backend.entities;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

import fr.ynov.takata_backend.enums.Winner;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
	private LocalDateTime start_date;
	@Column(nullable = true)
	private LocalDateTime end_date;
	
	private Duration duration;
	
	private int red_goal;
	private int bleu_goal;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private Winner winner;
	@ManyToOne
	@JoinColumn(name = "table_id")
	private BabyFoot_Table babyfoot_table;
		
	@OneToMany(mappedBy = "game")
	private List<User_Game> user_game;
	
	public void calculDuration() {
		if(start_date!=null && end_date!=null) {
			this.duration = Duration.between(start_date, end_date);
		}
	}
}
