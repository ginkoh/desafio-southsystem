// React.
import React, { useState, useMemo } from "react";
import useEntitiesInformation from "../hooks/useEntitiesInformation";

function EntityList() {
  const { entities, loading } = useEntitiesInformation();
  const [editingElement, setEditingElement] = useState({
    isEditing: false,
    elementId: null,
  });

  const fields = useMemo(() => ({
    name: "Nome",
    type: "Tipo",
    createdAt: "Data de criaçao",
  }));

  if (loading) return <h1>...</h1>;

  // Sort the entities by alphabetic order.
  const sortedEntities = entities.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div>
      <h1>Entity List</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {sortedEntities.map((entity, idx) => {
          return (
            <div
              key={idx}
              style={{
                flex: 1,
                border: "1px solid red",
                margin: "5px",
                minHeight: "200px",
                maxHeight: "200px",
              }}
            >
              {Object.keys(fields).map((key, i) => {
                const currentField = fields[key];

                return (
                  <div key={i}>
                    <span>
                      {currentField}: {}
                    </span>
                    {editingElement.isEditing &&
                    editingElement.elementId === entity.id + "-" + key ? (
                      <input
                        defaultValue={entity[key]}
                        onBlur={() =>
                          setEditingElement({
                            isEditing: false,
                            elementId: null,
                          })
                        }
                        onChange={(e) => {
                          // e.target.value
                        }}
                      ></input>
                    ) : (
                      <span
                        onClick={() =>
                          setEditingElement({
                            isEditing: true,
                            elementId: entity.id + "-" + key,
                          })
                        }
                      >
                        {entity[key]}
                      </span>
                    )}
                  </div>
                );
              })}
              <div>
                <img src={entity.imageUrl} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EntityList;
