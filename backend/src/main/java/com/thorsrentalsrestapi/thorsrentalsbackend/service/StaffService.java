package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.util.List;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Staff;

public interface StaffService {

    List<Staff> findAllStaff();
}
