import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// bootstrap
import { Button as BootstrapButton } from "react-bootstrap";

const Button = ({ children, variant, ...buttonProps }) => {
  return (
    <>
      <BootstrapButton variant={variant} {...buttonProps}>
        {children}
      </BootstrapButton>
    </>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
};
