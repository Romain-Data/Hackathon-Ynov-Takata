package fr.ynov.takata_backend.dto;

import fr.ynov.takata_backend.enums.RoleUser;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDto {

	private long id;
	private int version;
	private String name;
	private String surname;
	private String pseudo;
	private String mail;
	private RoleUser role;
	private String password;
}
