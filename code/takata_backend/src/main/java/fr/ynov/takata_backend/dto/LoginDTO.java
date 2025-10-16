package fr.ynov.takata_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginDTO {
    private String pseudo;
    private String password;
}
