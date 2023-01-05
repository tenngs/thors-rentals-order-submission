package com.thorsrentalsrestapi.thorsrentalsbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Inventory;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {

}

