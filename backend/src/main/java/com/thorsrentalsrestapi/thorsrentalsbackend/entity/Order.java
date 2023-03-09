package com.thorsrentalsrestapi.thorsrentalsbackend.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "orders")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "rental_hours", nullable = false)
    private int rentalHours;

    @Column(name = "rental_days", nullable = false)
    private int rentalDays;

    @Column(name = "cost", nullable = false)
    private Double cost;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(name = "return_datetime", nullable = false)
    private LocalDateTime returnDateTime;

    @Column(name = "status", nullable = false)
    private int status;

    // relationship mapping

    // 1) Many-to-One with Inventory
    // takes care of Ski, SnowBoard and ATV types
    // due to inheritance
    @ManyToOne
    @JoinColumn(name = "equipment_id", referencedColumnName = "id")
    private Inventory inventory;

    // 2) Many-to-One with Staff - gets sales_rep_id from
    // Staff id
    @ManyToOne
    @JoinColumn(name = "sales_rep_id", referencedColumnName = "id")
    private Staff staff;

    // 3) Many-to-One with Customer - gets customer_id from
    // Customer id
    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;
}
