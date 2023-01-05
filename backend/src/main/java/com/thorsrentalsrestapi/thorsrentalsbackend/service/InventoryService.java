package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.util.List;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Inventory;

public interface InventoryService {

    List<Inventory> findAllInventory();
}