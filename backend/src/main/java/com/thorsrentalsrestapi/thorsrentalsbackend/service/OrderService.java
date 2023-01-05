package com.thorsrentalsrestapi.thorsrentalsbackend.service;

import java.time.LocalDateTime;
import java.util.List;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Order;

public interface OrderService {

    Order saveOrder(Long staffId, Long customerId, Long inventoryId,
            int rentalHours, int rentalDays, Double cost,
            LocalDateTime returnDateTime, int status);

    List<Order> findAllOrders();

    Order findOrderById(Long id);

    void deleteOrderById(Long id);
}
