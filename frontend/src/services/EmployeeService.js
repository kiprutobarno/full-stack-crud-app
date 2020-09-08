import axios from "axios";
const BASE_URL = "http://localhost:8000/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(BASE_URL);
  }
}
export default new EmployeeService();
