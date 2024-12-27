import React from "react";
import ChildA from "./ChildA";
import UserContext from "../context/UserContext";
import { useState } from "react";

const Main = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe'
  })

  return (
    <div>
      <UserContext.Provider value = {userData}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
};

export default Main;
