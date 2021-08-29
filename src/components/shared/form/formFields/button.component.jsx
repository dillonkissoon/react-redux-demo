import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

// bootstrap
import { Button as BootstrapButton } from "react-bootstrap";
import { useView } from "./../../../../view-settings/view.hook";

const Button = ({ children, variant, ...buttonProps }) => {
  const { networkRequestActive } = useView();

  return (
    <>
      <BootstrapButton
        variant={variant}
        disabled={networkRequestActive}
        {...buttonProps}
      >
        {!networkRequestActive && <>{children}</>}
        {networkRequestActive && <FontAwesomeIcon icon={faCircleNotch} spin />}
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
