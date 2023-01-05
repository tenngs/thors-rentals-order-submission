package com.thorsrentalsrestapi.thorsrentalsbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Person;

public interface PersonRepository extends CrudRepository<Person, Long> {

}
