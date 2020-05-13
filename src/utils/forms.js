export const makeInitialValues = (formFields) =>
  formFields.reduce((acc, f) => ({ ...acc, [f.name]: f.default || "" }), {});
