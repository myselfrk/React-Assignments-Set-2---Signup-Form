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
    message: null,
    isSubmited: false,
    username: "",
  };

  doSubmit = (errors) => {
    let message = null;
    for (let key in errors) {
      if (errors[key] === "All fields are mandatory") {
        message = "All fields are mandatory";
      }
    }
    if (!message && Object.keys(errors).length !== 0) {
      message = errors[Object.keys(errors)[0]];
    }
    this.setState({ message });

    if (message === null) {
      let username = this.state.data.email.split("@")[0];
      this.setState({
        data: {
          name: "",
          password: "",
          email: "",
          gender: "male",
          phoneNumber: "",
        },
        message: null,
        isSubmited: true,
        username,
      });
    }
  };
  render() {
    const { data, isSubmited, username, message } = this.state;
    return (
      <div className="col-6 mx-auto">
        {isSubmited && (
          <h1>
            <span className="badge badge-dark">{"Hello " + username}</span>
          </h1>
        )}
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
