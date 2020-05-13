// React.
import React, { useMemo, useCallback } from "react";

// Components.
import GenericForm from "../components/GenericForm";

// Services.
import APIService from "../services/api";

// Utils.
import { makeInitialValues } from "../utils/forms";

function EntityCreation() {
  const formFields = useMemo(
    () => [
      {
        name: "name",
        type: "text",
        label: "Nome",
        default: "",
        extraProps: {},
      },
      {
        name: "type",
        type: "text",
        label: "Tipo",
        default: "",
        extraProps: {},
      },
      {
        name: "histories",
        type: "text",
        label: "Historias",
        default: "",
        extraProps: {},
      },
      {
        name: "imageUrl",
        type: "text",
        label: "URL da imagem",
        default: "",
        extraProps: {},
      },
    ],
    []
  );

  const initialValues = useMemo(() => makeInitialValues(formFields), [
    formFields,
  ]);

  const onSubmit = async ({ name, type, histories, imageUrl }) => {
    const entity = await APIService.createEntity({
      name,
      type,
      histories: [histories],
      imageUrl,
    });
  };

  return (
    <div>
      <h1>EntityCreation</h1>
      <GenericForm
        formFields={formFields}
        initialValues={initialValues}
        onSubmit={onSubmit}
      ></GenericForm>
    </div>
  );
}

export default EntityCreation;
