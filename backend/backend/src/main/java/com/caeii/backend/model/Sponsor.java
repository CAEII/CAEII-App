package com.caeii.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="sponsors")
public class Sponsor {

    // Atributos que tendremos en la base de datos.
    @Id
    @GeneratedValue
    private Long id;

    private String company;
    private String level;
    private String image;

}
