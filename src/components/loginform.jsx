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
    message: null,
  };

  doSubmit = (errors) => {
    let message = null;
    for (let key in errors) {
      if (errors[key] === "All fields are mandatory") {
        message = "All fields are mandatory";
      }
    }
    if (Object.keys(errors).length !== 0) {
      message = errors[Object.keys(errors)[0]];
    }
    this.setState({ message });

    if (message === null) {
      this.setState({ message: null, isSubmited: true });
    }
  };
  render() {
    const { data, isSubmited, message } = this.state;
    return isSubmited ? (
      <h1>
        <span className="badge badge-dark">
          {"Hello " + data.email.split("@")[0]}
        </span>
      </h1>
    ) : (
      <div className="col-6 mx-auto">
        {message && <div className="alert alert-danger">{message}</div>}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderSelect(
            "gender",
            "Gender",
            ["male", "female", "other"],
            data.gender
          )}
          {this.renderInput("phoneNumber", "Phone Number")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("submit")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
