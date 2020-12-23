import React, { Component } from "react";
import Validate from "./../../utils/validate.js";
import Input from "./input";
import RadioInput from "./radioInput";

class Form extends Component {
  state = { data: {}, errors: {} };

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  subValidate = () => {
    const errors = Validate(this.state.data);
    if (Object.keys(errors).length === 0) return {};
    return errors;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.subValidate();
    this.setState({ errors });
    this.doSubmit(errors);
  };

  renderInput(name, label, type = "text") {
    const { data } = this.state;
    return (
      <Input
        name={name}
        type={type}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  }

  renderRadio(name, label, values, defaultRadio) {
    return (
      <div data-testid={name}>
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
      </div>
    );
  }

  renderButton(label) {
    return (
      <button data-testid="submit" className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
