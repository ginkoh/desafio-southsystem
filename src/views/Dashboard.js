import React from "react";
import useEntitiesInformation from "../hooks/useEntitiesInformation";
import { entityServiceInfo } from "../constants/services";

function Dashboard() {
  const entities = useEntitiesInformation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <h1>FRONT-DRAGON</h1>
      Voce tem atualmente {entities.entities.length}{" "}
      {entityServiceInfo.pluralPrefix} cadastrados.
    </div>
  );
}

export default Dashboard;
