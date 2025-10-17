package fr.ynov.takata_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.ynov.takata_backend.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

	@Query("""
			FROM Game g WHERE
			g.babyfoot_tableId = :babyfootId 
			AND duration is NULL
			AND end_date IS NULL
			LIMIT 1
			""")
	Game findActuelGameByTableIf(long babyfootId);
}
