package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Atv;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Customer;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Ski;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Snowboard;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Staff;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.CustomerRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.InventoryRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.StaffRepository;

@Service
public class EntityCreator {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    // creates 5 staff test entities
    @Transactional
    public void createStaffTestEntities() {
        try {

            for (int i = 0; i < 5; i++) {

                Staff staff = new Staff();
                staff.setFirstName("Staff" + i);
                staff.setSurname("Name" + i);
                staff.setEmail("staff" + i + "@example.com");
                staff.setFirstLineAddress("123 Main St");
                staff.setPostcode("12345");
                staff.setCity("New York");
                staff.setPersonType(1);
                staff.setRole("Manager");
                staff.setEmploymentType("Full-time");
                staff.setAppAccess(1);
                staff.setCovidVaccinated(1);
                staffRepository.save(staff);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // creates 5 customer test entities
    @Transactional
    public void createCustomerTestEntities() {

        try {

            for (int i = 0; i < 5; i++) {

                Customer customer = new Customer();
                customer.setFirstName("Customer" + i);
                customer.setSurname("Name" + i);
                customer.setEmail("customer" + i + "@example.com");
                customer.setFirstLineAddress("123 Main St");
                customer.setPostcode("12345");
                customer.setCity("New York");
                customer.setPersonType(2);
                customerRepository.save(customer);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // creates 5 ski, snowboard and ATV test entities
    @Transactional
    public void createInventoryTestEntities() {

        try {

            for (int i = 0; i < 5; i++) {

                // create 5 ski instances
                Ski ski = new Ski();
                ski.setMake("Make " + i);
                ski.setModel("Model " + i);
                ski.setPricePerHour(10 + i);
                ski.setPricePerDay(50 + i);
                ski.setEquipmentType(1);
                ski.setAvailable(1);
                inventoryRepository.save(ski);

                // create 5 SB instances
                Snowboard snowboard = new Snowboard();
                snowboard.setMake("Make " + i);
                snowboard.setModel("Model " + i);
                snowboard.setPricePerHour(10 + i);
                snowboard.setPricePerDay(50 + i);
                snowboard.setEquipmentType(2);
                snowboard.setAvailable(1);
                inventoryRepository.save(snowboard);

                // create 5 ATV instances
                Atv atv = new Atv();
                atv.setMake("Make " + i);
                atv.setModel("Model " + i);
                atv.setPricePerHour(10 + i);
                atv.setPricePerDay(50 + i);
                atv.setEquipmentType(3);
                atv.setAvailable(1);
                atv.setRegNumber("Reg Number " + i);
                atv.setFuelType("Fuel Type " + i);
                inventoryRepository.save(atv);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // runner function for all test entities
    public void CreateTestEntities() {
        createStaffTestEntities();
        createCustomerTestEntities();
        createInventoryTestEntities();
    }
}