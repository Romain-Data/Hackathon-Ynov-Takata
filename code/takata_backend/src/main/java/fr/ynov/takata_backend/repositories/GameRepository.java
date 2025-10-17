package fr.ynov.takata_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.ynov.takata_backend.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
