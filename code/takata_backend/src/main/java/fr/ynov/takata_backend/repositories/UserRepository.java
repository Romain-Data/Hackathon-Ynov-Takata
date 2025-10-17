package fr.ynov.takata_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.ynov.takata_backend.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
