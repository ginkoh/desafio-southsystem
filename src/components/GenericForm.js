// React.
import React from "react";

// Third party.
import { useFormik } from "formik";

import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > button {
    margin: 5px;
    margin-left: 15px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px;

  & > label {
    margin-bottom: 5px;
  }
`;

const StyledInput = styled.input`
  padding: 7px;
  border: none;
  box-shadow: 1px 6px 10px 0px rgba(0, 0, 0, 0.25);
`;

const StyledSubmitButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px;
  color: #fff;
  background: rgba(97,9,121,1);
  cursor: pointer;
`;

function GenericForm({ formFields, initialValues, onSubmit, buttonValue, ...rest }) {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit} {...rest}>
      {formFields.map((field, idx) => {
        return (
          <InputContainer key={idx}>
            <label htmlFor={field.name}>{field.label}</label>
            <StyledInput
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              value={formik.values[field.name]}
              {...field.extraProps}
            />
          </InputContainer>
        );
      })}
      <StyledSubmitButton type="submit">{buttonValue || "Salvar"}</StyledSubmitButton>
    </StyledForm>
  );
}

export default GenericForm;
