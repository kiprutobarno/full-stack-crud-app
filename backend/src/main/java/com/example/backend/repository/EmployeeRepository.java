package com.example.backend.repository;

import com.example.backend.model.dao.EmployeeDAO;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeDAO, Long> {
    
}
