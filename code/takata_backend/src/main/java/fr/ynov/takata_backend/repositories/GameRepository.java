package fr.ynov.takata_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import fr.ynov.takata_backend.entities.Game;
import jakarta.transaction.Transactional;

public interface GameRepository extends JpaRepository<Game, Long> {

	@Transactional
	@Modifying
	@Query("""
			UPDATE Game g SET g.red_goal=:redGoal, g.bleu_goal = :bleuGoal
			WHERE
			g.babyfoot_table.id = :babyfootId 
			AND g.duration is NULL
			AND g.end_date IS NULL
			""")
	int updateScore(@Param("redGoal") int redGoal,@Param("bleuGoal") int bleuGoal,@Param("babyfootId") long babyfootId);
}
