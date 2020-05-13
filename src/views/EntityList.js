// React.
import React from "react";

// Components.
import Loading from "../components/Loading";
import EntityCard from "../components/EntityCard";

// Hooks.
import useEntitiesInformation from "../hooks/useEntitiesInformation";

// Utils.
import { entityServiceInfo, formattedPrefixName } from "../constants/services";
import history from "../utils/history";

function EntityList() {
  const { entities, loading } = useEntitiesInformation();

  if (loading) return <Loading />;

  // Sort the entities by alphabetic order.
  const sortedEntities = entities.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div style={{ margin: "20px", overflowY: "auto" }}>
      <h1>{`${formattedPrefixName} List`}</h1>
      {sortedEntities.map((entity, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              history.push(
                `/${entityServiceInfo.pluralPrefix}/detail/${entity.id}`
              );
            }}
          >
            <EntityCard isListPage={true} {...entity}></EntityCard>
          </div>
        );
      })}
    </div>
  );
}

export default EntityList;
