package com.thorsrentalsrestapi.thorsrentalsbackend.entity;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
@DiscriminatorColumn(name = "person_type", discriminatorType = DiscriminatorType.STRING)
public abstract class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "surname")
    private String surname;

    @Column(name = "first_line_address", nullable = false)
    private String firstLineAddress;

    @Column(name = "postcode", nullable = false)
    private String postcode;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "email", nullable = false)
    private String email;
}
