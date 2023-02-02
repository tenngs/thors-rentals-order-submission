package com.thorsrentalsrestapi.thorsrentalsbackend.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "staff")
public class Staff extends Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "person_type", nullable = false)
    private int personType;

    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "employment_type", nullable = false)
    private String employmentType;

    @Column(name = "app_access", nullable = false)
    private int appAccess;

    @Column(name = "covid_vaccinated", nullable = false)
    private int covidVaccinated;

    // relationship mapping
    @JsonIgnore
    @OneToMany(mappedBy = "staff")
    private Set<Order> orders;
}
