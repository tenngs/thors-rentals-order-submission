package com.thorsrentalsrestapi.thorsrentalsbackend.web;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Customer;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Inventory;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Order;
import com.thorsrentalsrestapi.thorsrentalsbackend.entity.Staff;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.CustomerRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.InventoryRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.OrderRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.repository.StaffRepository;
import com.thorsrentalsrestapi.thorsrentalsbackend.service.OrderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    StaffRepository staffRepository;

    @Autowired
    InventoryRepository inventoryRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrder(@PathVariable Long id) {
        Order order = orderService.findOrderById(id);
        if (order == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(order, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
        // retrieve Inventory, Staff and Customer entities with id equal to the value of
        // their respective fields in the request body
        Inventory inventory = inventoryRepository.findById(order.getInventory().getId())
                .orElseThrow(() -> new EntityNotFoundException("Inventory not found"));

        Staff staff = staffRepository.findById(order.getStaff().getId())
                .orElseThrow(() -> new EntityNotFoundException("Staff not found"));

        Customer customer = customerRepository.findById(order.getCustomer().getId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));

        // set retrieved entities as the values for the "inventory", "staff", and
        // "customer" fields of the Order entity
        order.setInventory(inventory);
        order.setStaff(staff);
        order.setCustomer(customer);

        // save Order entity
        Order savedOrder = orderRepository.save(order);

        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

    // delete order by ID and return confirmation that it was
    // deleted
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrderById(id);
        return new ResponseEntity<>("Order with ID " + id + " has been deleted.", HttpStatus.OK);
    }

    // get all orders
    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderService.findAllOrders();
    }
}
