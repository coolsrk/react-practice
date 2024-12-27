import React, { useState, useEffect } from "react";
import Content from "./Content";
import { ModeContext } from "../context/ModeContext";
import "../css/MainMode.css";

const MainMode = () => {
  const [mode, setMode] = useState("light");

  return (
    <div className="main" style = {mode === 'light' ? {backgroundColor: 'white', color: 'black'} : {backgroundColor: 'black', color: 'white'}}>
      <ModeContext.Provider value={{ mode, setMode }}>
        <Content></Content>
      </ModeContext.Provider>
    </div>
  );
};

export default MainMode;
