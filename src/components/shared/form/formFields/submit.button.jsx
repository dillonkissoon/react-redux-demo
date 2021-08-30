import React from "react";
import Button from "./button.component";
import { useView } from "./../../../../view-settings/view.hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const FormButton = ({ children, ...props }) => {
  const { networkRequestActive } = useView();
  return (
    <>
      <Button {...props}>
        {!networkRequestActive && <>{children}</>}
        {networkRequestActive && <FontAwesomeIcon icon={faCircleNotch} spin />}
      </Button>
    </>
  );
};

export default FormButton;
