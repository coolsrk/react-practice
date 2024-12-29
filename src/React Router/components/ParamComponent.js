import React from "react";
import { useParams } from "react-router-dom";

const ParamComponent = () => {
  const { id } = useParams();
  return <div>Id: {id}</div>;
};

export default ParamComponent;
