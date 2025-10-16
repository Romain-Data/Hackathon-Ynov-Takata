package fr.ynov.takata_backend.entities;

import java.util.List;

import fr.ynov.takata_backend.enums.RoleUser;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity{

	@Column(nullable = false, length = 50)
	private String name;
	@Column(nullable = false, length = 50)
	private String surname;
	@Column(nullable = false, length = 50)
	private String pseudo;
	@Email
	@Column(unique=true, nullable = false, length=150)
	private String mail;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private RoleUser role;
	@Column(nullable = false, length = 150)
	private String password;
	
	@OneToMany(mappedBy = "user")
	private List<User_Game> user_game;
}
