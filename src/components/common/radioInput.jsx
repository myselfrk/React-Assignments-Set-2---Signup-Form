import React from "react";

function RadioInput({ onChange, error }) {
  return (
    <div onChange={onChange}>
      <label htmlFor="gender">Gender</label>
      <div className="form-check">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          className="form-check-input"
          data-testid="gender"
          defaultChecked
        />
        <label htmlFor="male" className="form-check-label">
          male
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          data-testid="gender"
          className="form-check-input"
        />
        <label htmlFor="female" className="form-check-label">
          female
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="gender"
          id="other"
          value="other"
          data-testid="gender"
          className="form-check-input"
        />
        <label htmlFor="other" className="form-check-label">
          other
        </label>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default RadioInput;
