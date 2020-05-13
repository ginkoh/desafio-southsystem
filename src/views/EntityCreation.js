// React.
import React, { useMemo } from "react";

// Components.
import GenericForm from "../components/GenericForm";

// Services.
import APIService from "../services/api";

// Utils.
import { makeInitialValues } from "../utils/forms";
import { formattedPrefixName } from "../constants/services";

// Third party.
import styled from "styled-components";

const EntityCreationContainer = styled.div`
  margin: 20px;
`;

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

  const onSubmit = async ({ name, type, histories, imageUrl }, handlers) => {
    if (name && type && imageUrl) {
      const entity = await APIService.createEntity({
        name,
        type,
        histories: [histories],
        imageUrl,
      });

      if (entity) {
        alert(formattedPrefixName + " criado!");
      } else {
        alert("Ocorreu um erro. Tente novamente");
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <EntityCreationContainer>
      <h1>{`${formattedPrefixName} Creation`}</h1>
      <GenericForm
        formFields={formFields}
        initialValues={initialValues}
        onSubmit={onSubmit}
      ></GenericForm>
    </EntityCreationContainer>
  );
}

export default EntityCreation;
