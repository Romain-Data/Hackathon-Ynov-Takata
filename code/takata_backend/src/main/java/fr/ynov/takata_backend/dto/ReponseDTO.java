package fr.ynov.takata_backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReponseDTO {
    private String token;
    private UserDTO user;
}
