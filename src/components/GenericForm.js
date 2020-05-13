// React.
import React, { Fragment } from "react";

// Third party.
import { useFormik } from "formik";

function GenericForm({ formFields, initialValues, onSubmit }) {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      {formFields.map((field, idx) => {
        return (
          <Fragment key={idx}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              value={formik.values[field.name]}
              {...field.extraProps}
            />
          </Fragment>
        );
      })}
      <button type="submit">Salvar</button>
    </form>
  );
}

export default GenericForm;
