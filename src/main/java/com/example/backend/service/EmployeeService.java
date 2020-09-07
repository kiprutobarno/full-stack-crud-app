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

    public EmployeeDAO update(Long id, EmployeeDTO emplUpdate) {
        EmployeeDAO employee = repository.findById(id).get();
        employee.setFirstName(emplUpdate.getFirstName());
        employee.setLastName(emplUpdate.getLastName());
        employee.setEmailAddress(emplUpdate.getEmailAddress());
        return repository.save(employee);
    }
}
