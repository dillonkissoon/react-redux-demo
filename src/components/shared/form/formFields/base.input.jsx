import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

// bootstrap
import { Form, InputGroup } from "react-bootstrap";

const BaseInput = ({
  id,
  label,
  name,
  register,
  type,
  // formState,
  ...inputProps
}) => {
  // grabbing values from react-hook-forms
  const {
    formState: { errors, dirtyFields, isDirty },
  } = useFormContext();

  let error = errors[name];

  return (
    <>
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type={type}
            {...inputProps}
            {...register}
            isValid={!error && dirtyFields[name] && isDirty}
            isInvalid={!!error}
            size="lg"
          />
          {error && (
            <Form.Control.Feedback type="invalid">
              {error.message}
            </Form.Control.Feedback>
          )}
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default BaseInput;

BaseInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // formState: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
  type: PropTypes.string,
};

BaseInput.defaultProps = {
  type: "text",
};
