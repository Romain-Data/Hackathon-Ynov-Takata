package fr.ynov.takata_backend.entities;

import fr.ynov.takata_backend.enums.RoleGame;
import fr.ynov.takata_backend.enums.Team;
import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "User_Game")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User_Game extends BaseEntity{

	
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@ManyToOne
	@JoinColumn(name = "game_id")
	private Game game;
	
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private Team team;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private RoleGame role;
}
