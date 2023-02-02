package com.thorsrentalsrestapi.thorsrentalsbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
