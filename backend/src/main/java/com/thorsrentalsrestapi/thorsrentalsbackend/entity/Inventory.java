package com.thorsrentalsrestapi.thorsrentalsbackend.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "inventory_type", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("equipment_type")
@Table(name = "inventory")
public class Inventory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "make", nullable = false)
    private String make;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "price_per_hour", nullable = false)
    private double pricePerHour;

    @Column(name = "price_per_day", nullable = false)
    private double pricePerDay;

    @Column(name = "equipment_type", nullable = false)
    private int equipmentType;

    @Column(name = "available", nullable = false)
    private int available;

    // relationship mapping

    // 1) One-to-Many with Ski
    // 2) One-to-Many with SnowBoards
    // 3) One-to-Many with Atv
    @JsonIgnore
    @OneToMany(mappedBy = "inventory")
    private Set<Order> orders;
}
