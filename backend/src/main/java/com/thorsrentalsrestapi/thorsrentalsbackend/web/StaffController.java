package com.thorsrentalsrestapi.thorsrentalsbackend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Staff;
import com.thorsrentalsrestapi.thorsrentalsbackend.service.StaffService;

// allow frontend to list all staff
@RestController
@CrossOrigin(origins = "http://18.116.176.176")
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    StaffService staffService;

    // get all staff members
    @GetMapping("/all")
    public List<Staff> getAllStaff() {
        return staffService.findAllStaff();
    }
}
