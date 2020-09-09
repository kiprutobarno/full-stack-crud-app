import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
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

  updateEmployee(id) {
    this.props.history.push(`update-employee/${id}`);
  }

  async deleteEmployee(id) {
    await EmployeeService.deleteEmployee(id);
    this.setState({
      employees: this.state.employees.filter((employee) => employee.id !== id),
    });
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
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailAddress}</td>
                  <td>
                    <button
                      className="btn btn-success ml-2"
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-info ml-2"
                      onClick={() => this.updateEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
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
