package com.thorsrentalsrestapi.thorsrentalsbackend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Inventory;
import com.thorsrentalsrestapi.thorsrentalsbackend.service.InventoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/inventory/all")
public class InventoryController {

    @Autowired
    InventoryService inventoryService;

    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryService.findAllInventory();
    }
}
