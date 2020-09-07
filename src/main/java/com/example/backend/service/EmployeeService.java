package com.example.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.backend.model.dao.EmployeeDAO;
import com.example.backend.model.dto.EmployeeDTO;
import com.example.backend.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository repository;

    public EmployeeDAO add(EmployeeDTO employee) {
        EmployeeDAO empl = new EmployeeDAO();
        empl.setFirstName(employee.getFirstName());
        empl.setLastName(employee.getLastName());
        empl.setEmailAddress(employee.getEmailAddress());
        return repository.save(empl);
    }

    public List<EmployeeDAO> getAllEmployees() {
        return repository.findAll();
    }

    public EmployeeDAO getSpecificEmployee(Long id) {
        return repository.findById(id).get();
    }

    public Map<String, String> deleteEmployee(Long id) {
        HashMap<String, String> message = new HashMap<>();
        message.put("message", "Employee deleted successfully!");
        EmployeeDAO empl = repository.findById(id).get();
        repository.delete(empl);
        return message;
    }
}
