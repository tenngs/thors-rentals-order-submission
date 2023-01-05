package com.thorsrentalsrestapi.thorsrentalsbackend.repository;

import org.springframework.data.repository.CrudRepository;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}
