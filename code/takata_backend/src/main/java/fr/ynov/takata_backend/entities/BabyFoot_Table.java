package fr.ynov.takata_backend.entities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BabyFoot_Table extends BaseEntity{

	@Column(nullable = false, length = 50)
	private String name;
	@Column(nullable = false, length = 150)
	private String location;
	@OneToMany(mappedBy = "babyfoot_table")
	private List<Game> game;
}
