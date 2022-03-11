package com.caeii.backend.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class userDTO {

    // Atributos que mandaremos al Front.
    private String email;
    private String firstName;
    private String lastName;

    // Contructor vacío.
    public userDTO() {
    }

    // Constructor con todos los atributos.
    public userDTO(String email, String firstName, String lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
