// React.
import React, { useState, useRef, useCallback } from "react";

// Third party.
import styled from "styled-components";
import moment from "moment";

// Services.
import APIService from "../services/api";

// Utils.
import { raritiesColors } from "../constants/rarities";

const EntityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 90%;
  margin: 0px auto 20px;
  margin-top: 20px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }

  & > * {
    margin: 20px;
  }

  box-shadow: 0em 2em 5em rgba(0, 0, 0, 0.25);
  font-family: Montserrat;
`;

const EntityName = styled.h2`
  color: #3c3c3c;
  cursor: pointer;
  margin-bottom: 5px;
`;

const EntityNameInput = styled.input`
  padding: 10px;
  border: none;
  font-size: 24px;
  font-family: Montserrat;
  font-weight: bold;
`;

const EntityCardImage = styled.img`
  height: auto;
  object-fit: cover;
  min-height: 400px !important;
  max-height: 400px !important;
  box-shadow: 0em 2em 5em rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  cursor: pointer;
`;

const EntityCardBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-left; 10px;
  padding-right: 10px;
  max-height: 450px;
  flex: 2;
`;

const EntityLabel = styled.span`
  background: ${(props) => props.background};
  color: #fff;
  border-radius: 3px;
  text-align: center;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
`;

const EntityLabelInput = styled.input`
  color: #000;
  background: ${(props) => props.background};
  border: none;
`;

const EntityInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EntityDescription = styled.p`
  line-height: 1.8;
  font-style: italic;
  color: #585858;
  border-top: 1px solid #ddd;
  cursor: pointer;
`;

const EntityDescriptionInput = styled.input`
  color: #585858;
  border: none;
  border-top: 1px solid #ddd;
  height: auto;
`;

function EntityCard(props) {
  const {
    name,
    type,
    createdAt,
    histories,
    imageUrl,
    entityId,
    isListPage,
  } = props;
  const [isEditing, setIsEditing] = useState({
    editingName: false,
    editingType: false,
    editingHistories: false,
  });
  const [currentEntity, setCurrentEntity] = useState({
    name,
    type,
    createdAt,
    histories,
    imageUrl,
    entityId,
  });

  const updateEntityByField = useCallback(async (field, targetValue) => {
    const updatedInformation = {
      ...currentEntity,
      name: targetValue,
    };

    const updatedEntity = await APIService.updateEntity(
      entityId,
      updatedInformation
    );

    if (updatedEntity) {
      setCurrentEntity({
        ...currentEntity,
        [field]: targetValue,
      });
    } else {
      alert("Um erro ocorreu, tente novamente");
    }
    setIsEditing(false);
  }, []);

  if (!props || (props && !Object.keys(props).length))
    return <h1>Could not load detail</h1>;

  return (
    <EntityContainer>
      {imageUrl ? (
        <EntityCardImage
          src={imageUrl}
          alt={name}
          style={{ maxHeight: "500px" }}
        />
      ) : (
        <div></div>
      )}
      <EntityCardBody>
        {isEditing.editingName && currentEntity.name ? (
          <EntityNameInput
            type="text"
            onBlur={(e) => updateEntityByField("name", e.target.value)}
            defaultValue={currentEntity.name}
          ></EntityNameInput>
        ) : (
          <EntityName
            onClick={() =>
              setIsEditing({
                ...isEditing,
                editingName: true,
              })
            }
          >
            {currentEntity.name && currentEntity.name.toUpperCase()}
          </EntityName>
        )}
        <EntityInfo>
          {isEditing.editingType && currentEntity.type ? (
            <EntityLabelInput
              onBlur={(e) => updateEntityByField("type", e.target.value)}
              background={raritiesColors[currentEntity.type] || "#585858"}
            ></EntityLabelInput>
          ) : (
            <EntityLabel
              onClick={() =>
                setIsEditing({
                  ...isEditing,
                  editingType: true,
                })
              }
              background={raritiesColors[currentEntity.type] || "#585858"}
            >
              {currentEntity.type}
            </EntityLabel>
          )}

          <span>
            Created:{" "}
            {moment(currentEntity.createdAt).format("DD-MM-YYYY HH:mm:ss")}
          </span>
        </EntityInfo>
        <br />
        {Array.isArray(currentEntity.histories) &&
          currentEntity.histories.map((h, idx) =>
            isEditing.editingHistories ? (
              <EntityDescriptionInput
                onBlur={(e) => updateEntityByField("histories", e.target.value)}
                key={idx}
                defaultValue={h}
              ></EntityDescriptionInput>
            ) : (
              <EntityDescription
                onClick={() =>
                  setIsEditing({
                    ...isEditing,
                    editingHistories: true,
                  })
                }
                key={idx}
              >
                {h}
              </EntityDescription>
            )
          )}
        {!isListPage && (
          <input
            type="button"
            defaultValue="Deletar"
            onClick={async () => {
              const deletedEntity = await APIService.deleteEntity(entityId);
              if (deletedEntity) {
                alert("Deletado!");
                window.location.reload();
              } else {
                alert("Um erro ocorreu, tente novamente");
              }
            }}
            style={{
              width: "100px",
              cursor: "pointer",
              borderRadius: "3px",
              padding: "5px",
              border: "none",
              color: "#fff",
              background: "#ff253a",
            }}
          />
        )}
      </EntityCardBody>
    </EntityContainer>
  );
}

export default EntityCard;
