// React.
import React from "react";

// Components.
import EntityCard from "../components/EntityCard";
import useEntitiesInformation from "../hooks/useEntitiesInformation";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function EntityDetail() {
  const { entityId } = useParams();
  const { entity, loading } = useEntitiesInformation(entityId);

  return (
    <div>
      <h1>Entity Detail</h1>
      {loading ? <h1>...</h1> : <EntityCard {...entity}></EntityCard>}
    </div>
  );
}

export default EntityDetail;
