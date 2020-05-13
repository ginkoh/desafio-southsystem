// React.
import React from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom";

// Hooks.
import useEntitiesInformation from "../hooks/useEntitiesInformation";

// Components.
import EntityCard from "../components/EntityCard";
import Loading from "../components/Loading";

// Utils.
import { entityServiceInfo } from "../constants/services";

// Third party.
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin: 5px;
  border-radius: 3px;
  padding: 10px;
  background: #ececec;
  outline: none;
  text-decoration: none;
  color: #000;
`;

function EntityDetail() {
  const { entityId } = useParams();
  const { entity, loading } = useEntitiesInformation(entityId);

  if (loading) return <Loading></Loading>;

  const entityDetailLinkPrefix = `/${entityServiceInfo.pluralPrefix}/detail/`;

  const previousEntity = parseInt(entityId, 10) - 1 || 1;
  const nextEntity = parseInt(entityId, 10) + 1;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <EntityCard {...entity} entityId={entityId}></EntityCard>
      </div>
      <div style={{ alignSelf: "flex-end", margin: "100px" }}>
        <StyledLink to={entityDetailLinkPrefix + previousEntity.toString()}>
          Anterior
        </StyledLink>
        <StyledLink to={entityDetailLinkPrefix + nextEntity.toString()}>
          Proxima
        </StyledLink>
      </div>
    </div>
  );
}

export default EntityDetail;
