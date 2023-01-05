package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Order;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.CustomerRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.InventoryRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.OrderRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.StaffRepository;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    @Override
    public Order saveOrder(Long staffId, Long customerId, Long inventoryId,
            int rentalHours, int rentalDays, Double cost,
            LocalDateTime returnDateTime, int status) {
        Order order = new Order();
        order.setStaff(staffRepository.findById(staffId).orElse(null));
        order.setCustomer(customerRepository.findById(customerId).orElse(null));
        order.setInventory(inventoryRepository.findById(inventoryId).orElse(null));
        order.setRentalHours(rentalHours);
        order.setRentalDays(rentalDays);
        order.setCost(cost);
        order.setReturnDateTime(returnDateTime);
        order.setStatus(status);
        return orderRepository.save(order);
    }

    @Override
    public List<Order> findAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

    @Override
    public Order findOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteOrderById(Long id) {
        orderRepository.deleteById(id);
    }
}