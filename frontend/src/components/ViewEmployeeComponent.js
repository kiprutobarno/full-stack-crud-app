import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  async componentDidMount() {
    const response = await EmployeeService.getEmployee(this.state.id);
    this.setState({ employee: response.data });
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3 mb-3">
          <label> First Name: </label>
          <div> {this.state.employee.firstName}</div>
        </div>
        <div className="row mb-3">
          <label> Last Name: </label>
          <div>{this.state.employee.lastName}</div>
        </div>
        <div className="row mb-3">
          <label> Email Address: </label>
          <div>{this.state.employee.emailAddress}</div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
