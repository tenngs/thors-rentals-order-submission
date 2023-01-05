package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Inventory;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.InventoryRepository;

@Service
public class InventoryServiceImpl implements InventoryService {
    @Autowired
    private InventoryRepository inventoryRepository;

    @Override
    public List<Inventory> findAllInventory() {
        return (List<Inventory>) inventoryRepository.findAll();
    }
}
