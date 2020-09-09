import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.createEmployee = this.createEmployee.bind(this);
  }

  async componentDidMount() {
    const response = await EmployeeService.getEmployees();
    this.setState({ employees: response.data });
  }

  createEmployee() {
    this.props.history.push("/create");
  }

  viewEmployee(id) {
    this.props.history.push(`/employees/${id}`);
  }

  render() {
    return (
      <div className="container mt-5">
        <h5 className="text-center">View Employees Details</h5>
        <div className="row">
          <button
            className="btn btn-primary mb-3"
            onClick={this.createEmployee}
          >
            Create
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailAddress}</td>
                  <td>
                    <button
                      className="btn btn-success ml-5"
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      View
                    </button>
                  </td>
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
