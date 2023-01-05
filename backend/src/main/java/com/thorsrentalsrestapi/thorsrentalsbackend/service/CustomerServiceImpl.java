package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Customer;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public List<Customer> getCustomers() {
        return (List<Customer>) customerRepository.findAll();
    }
}
