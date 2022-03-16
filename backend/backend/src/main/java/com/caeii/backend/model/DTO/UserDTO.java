package com.caeii.backend.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserDTO {

    // Atributos que mandaremos al Front.
    private String email;
    private String firstName;
    private String lastName;
    private Boolean consent;
    private String linkedInProfile;

    // Contructor vacío.
    public UserDTO() {
    }

    // Constructor con todos los atributos.
    public UserDTO(String email, String firstName, String lastName, Boolean consent, String linkedInProfile) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.consent = consent;
        this.linkedInProfile = linkedInProfile;
    }
}
