import React from "react";
import PropTypes from "prop-types";
import BaseInput from "./base.input";

const Input = ({ name, id, label, type, ...inputProps }) => {
  return (
    <>
      <BaseInput
        name={name}
        id={id}
        label={label}
        type={type}
        {...inputProps}
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};
