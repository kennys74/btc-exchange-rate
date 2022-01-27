import React from "react";

const InputBase = ({ textLabel, disabled, ...props }) => {
  return (
    <React.Fragment>
      <input type="number" className="form-control" {...props} />
      <span className="input-group-text">{textLabel}</span>
    </React.Fragment>
  );
};

export default InputBase;
