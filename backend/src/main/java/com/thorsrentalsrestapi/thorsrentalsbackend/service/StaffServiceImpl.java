package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Staff;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.StaffRepository;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffRepository staffRepository;

    @Override
    public List<Staff> findAllStaff() {
        return (List<Staff>) staffRepository.findAll();
    }
}
