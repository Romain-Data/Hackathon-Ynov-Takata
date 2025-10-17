package fr.ynov.takata_backend.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.ynov.takata_backend.entities.BabyFoot_Table;

public interface BabyFoot_TableRepository extends JpaRepository<BabyFoot_Table, Long> {

	BabyFoot_Table findFirstByOrderByIdAsc();
}
