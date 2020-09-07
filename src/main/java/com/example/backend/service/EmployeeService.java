package com.example.backend.service;

import com.example.backend.model.dao.EmployeeDAO;
import com.example.backend.model.dto.EmployeeDTO;
import com.example.backend.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    public EmployeeDAO add(EmployeeDTO employee) {
        EmployeeDAO emp = new EmployeeDAO();
        emp.setFirstName(employee.getFirstName());
        emp.setLastName(employee.getLastName());
        emp.setEmailAddress(employee.getEmailAddress());
        return repository.save(emp);
    }

    public List<EmployeeDAO> getAllEmployees() {
        return repository.findAll();
    }

    public EmployeeDAO getSpecificEmployee(Long id) {
        return repository.findById(id).get();
    }
}
