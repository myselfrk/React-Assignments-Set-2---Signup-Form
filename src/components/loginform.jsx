import React, { Component } from "react";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: {
      name: "",
      password: "",
      email: "",
      gender: "male",
      phoneNumber: "",
    },
    errors: {},
    isSubmited: false,
  };

  doSubmit = () => {
    this.setState({ isSubmited: true });
  };
  render() {
    const { data, isSubmited } = this.state;
    return isSubmited ? (
      <h1>
        <span className="badge badge-primary">
          {"Hello " + this.state.data.email.split("@", 1)[0]}
        </span>
      </h1>
    ) : (
      <div className="col-6 mx-auto">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderRadio(
            "gender",
            "Gender",
            ["male", "female", "other"],
            data.gender
          )}
          {this.renderInput("phoneNumber", "Phone Number", "number")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("submit")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
