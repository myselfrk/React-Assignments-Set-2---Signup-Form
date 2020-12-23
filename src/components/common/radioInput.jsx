import React from "react";

function RadioInput({ name, value, onChange, defaultChecked }) {
  return (
    <div className="form-check">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        className="form-check-input"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value} className="form-check-label">
        {value}
      </label>
    </div>
  );
}

export default RadioInput;
