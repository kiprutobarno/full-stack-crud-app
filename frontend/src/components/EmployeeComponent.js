import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  async componentDidMount() {
    const response = await EmployeeService.getEmployees();
    this.setState({ employees: response.data });
  }

  render() {
    return (
      <div className="container mt-5">
        <h5 className="text-center">View Employee Details</h5>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
