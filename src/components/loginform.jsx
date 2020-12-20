import React, { Component } from "react";
import Input from "./common/input";
import Validate from "./../utils/validate";
import RadioInput from "./common/radioInput";

class LoginForm extends Component {
  state = {
    account: {
      name: "",
      password: "",
      email: "",
      gender: "male",
      phoneNumber: "",
    },
    errors: {},
    isSubmited: false,
  };

  validateProperty = ({ name, value }) => {
    return Validate({ [name]: value })[name];
  };
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  validate = () => {
    const errors = Validate(this.state.account);
    if (!errors) return null;
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length !== 0) return;
    this.doSubmit();
  };

  doSubmit = () => {
    this.setState({ isSubmited: true });
  };
  render() {
    const { account, errors, isSubmited } = this.state;
    return isSubmited ? (
      <h1>
        <span className="badge badge-primary">
          {"Hello " + this.state.account.email.split("@", 1)[0]}
        </span>
      </h1>
    ) : (
      <div className="col-6 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="name"
            value={account.name}
            label="Name"
            onChange={this.handleChange}
            error={errors.name}
          />
          <Input
            name="email"
            value={account.email}
            label=" Email address"
            onChange={this.handleChange}
            error={errors.email}
          />
          <RadioInput onChange={this.handleChange} error={errors.gender} />
          <Input
            name="phoneNumber"
            type="number"
            value={account.phoneNumber}
            label="Phone Number"
            onChange={this.handleChange}
            error={errors.phoneNumber}
          />
          <Input
            name="password"
            type="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button className="btn btn-primary">submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
