import React from "react";
import PropTypes from "prop-types";

// components
import Input from "./input";

const PasswordInput = ({ name, id, label, ...passwordInputProps }) => {
  return (
    <>
      <Input
        id={id}
        label={label}
        name={name}
        type="password"
        {...passwordInputProps}
      />
    </>
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
};

PasswordInput.defaultProps = {
  name: "password",
  label: "Password",
};
