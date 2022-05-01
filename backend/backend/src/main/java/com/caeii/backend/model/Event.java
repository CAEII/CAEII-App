package com.caeii.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="events")
@Getter @Setter
public class Event {

    // Atributos que tendremos en la base de datos.
    @Id
    @GeneratedValue
    private Long id;

    private String type;
    private String name;
    private String description;
    private Date date;
    private Integer duration;

    public Event() {
    }

    public Event(Long id, String type, String name, String description, Date date, Integer duration) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.description = description;
        this.date = date;
        this.duration = duration;
    }
}
