// React.
import React from "react";
import useEntitiesInformation from "../hooks/useEntitiesInformation";

function EntityList() {
  const { entities } = useEntitiesInformation();
  return (
    <div>
      <h1>Entity List</h1>
    </div>
  );
}

export default EntityList;
