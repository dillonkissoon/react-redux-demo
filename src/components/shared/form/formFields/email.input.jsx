import React from "react";
import PropTypes from "prop-types";

// components
import Input from "./input";

const EmailInput = ({ name, id, label, ...emailInputProps }) => {
  return (
    <>
      <Input
        id={id}
        label={label}
        name={name}
        type="email"
        {...emailInputProps}
      />
    </>
  );
};

export default EmailInput;

EmailInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
};

EmailInput.defaultProps = {
  name: "email",
  label: "Email Address",
};
