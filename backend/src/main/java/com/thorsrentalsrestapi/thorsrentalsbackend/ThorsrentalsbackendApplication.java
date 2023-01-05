package com.thorsrentalsrestapi.thorsrentalsbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.thorsrentalsrestapi.thorsrentalsbackend.service.EntityCreator;

@CrossOrigin(origins = "http://localhost:3000")
@SpringBootApplication
public class ThorsrentalsbackendApplication implements CommandLineRunner {

	@Autowired
	private EntityCreator entityCreator;

	public static void main(String[] args) {
		SpringApplication.run(ThorsrentalsbackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		entityCreator.CreateTestEntities();
	}
}
