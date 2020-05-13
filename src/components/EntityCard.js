// React.
import React from "react";

function EntityCard(props) {
  const { name, type, createdAt, histories, imageUrl } = props;

  if (!props || (props && !Object.keys(props).length))
    return <h1>Could not load detail</h1>;

  return (
    <div>
      <div>
        <h4>Nome: {name} </h4>
        <span>Tipo: {type}</span>
        <br />
        <span>Data de criaçao: {createdAt}</span>
        <img src={imageUrl} alt=""/>
      </div>
    </div>
  );
}

export default EntityCard;
