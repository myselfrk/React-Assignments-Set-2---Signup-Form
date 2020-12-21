import React, { Component } from "react";
import Validate from "./../../utils/validate.js";
import Input from "./input";
import RadioInput from "./radioInput";

class Form extends Component {
  state = { data: {}, errors: {} };

  validateProperty = ({ name, value }) => {
    return Validate({ [name]: value })[name];
  };
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  validate = () => {
    const errors = Validate(this.state.data);
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

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderRadio(name, label, values, defaultRadio) {
    const error = this.state.errors[name];
    return (
      <div>
        <label>{label}</label>
        {values.map((value) => (
          <RadioInput
            key={value}
            value={value}
            name={name}
            onChange={this.handleChange}
            defaultChecked={defaultRadio === value}
          />
        ))}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
}

export default Form;
