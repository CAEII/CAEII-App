package com.caeii.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Table(name = "users")
@Getter @Setter
public class User {

    // Atributos que tendremos en la base de datos.
    @Id
    @GeneratedValue
    private Long id;

    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private Boolean consent;
    private String linkedInProfile;

    public User() {
    }

    public User(Long id, String email, String password, String firstName, String lastName, Boolean consent, String linkedInProfile) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.consent = consent;
        this.linkedInProfile = linkedInProfile;
    }
}
