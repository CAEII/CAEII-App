package com.caeii.backend.model.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserDTO {

    // Atributos que mandaremos al Front.
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private Boolean consent;
    private String linkedInProfile;

    // Contructor vacío.
    public UserDTO() {
    }

    // Constructor con todos los atributos.
    public UserDTO(Long id, String email, String firstName, String lastName, Boolean consent, String linkedInProfile) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.consent = consent;
        this.linkedInProfile = linkedInProfile;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
