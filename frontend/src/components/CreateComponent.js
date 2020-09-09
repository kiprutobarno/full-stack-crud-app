import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
    };
    this.firstNameHandler = this.firstNameHandler.bind(this);
    this.lastNameHandler = this.lastNameHandler.bind(this);
    this.emailAddressHandler = this.emailAddressHandler.bind(this);
  }

  saveEmployee = async (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
    };
    const response = await EmployeeService.createEmployee(employee);
    if (response.status === 201) {
      this.props.history.push("/");
    }
  };

  firstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  lastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  emailAddressHandler = (event) => {
    this.setState({ emailAddress: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-5 mb-5">
          <form>
            <div className="form-group">
              <label> First Name: </label>
              <input
                placeholder="First Name"
                name="firstName"
                className="form-control"
                value={this.state.firstName}
                onChange={this.firstNameHandler}
              />
            </div>
            <div className="form-group">
              <label> Last Name: </label>
              <input
                placeholder="Last Name"
                name="lastName"
                className="form-control"
                value={this.state.lastName}
                onChange={this.lastNameHandler}
              />
            </div>
            <div className="form-group">
              <label> Email Address: </label>
              <input
                placeholder="Email Address"
                name="emailAddress"
                className="form-control"
                value={this.state.emailAddress}
                onChange={this.emailAddressHandler}
              />
            </div>

            <button className="btn btn-success" onClick={this.saveEmployee}>
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEmployee;
