import axios from "axios";
const BASE_URL = "http://localhost:8000/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(BASE_URL);
  }

  getEmployee(id) {
    return axios.get(BASE_URL + "/" + id);
  }

  createEmployee(employee) {
    return axios.post(BASE_URL, employee);
  }
}
export default new EmployeeService();
