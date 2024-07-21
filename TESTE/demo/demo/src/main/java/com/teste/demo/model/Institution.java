package com.teste.demo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Institution {

    @Id
    @GeneratedValue  (strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany  (mappedBy = "institution")
    private List<Event> events;

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}



