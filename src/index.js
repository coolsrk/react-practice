import React from "react";
import ReactDOM from "react-dom/client";

// Change these 2 imports to run different examples
import "./JSX Props/index.css";
import App from "./JSX Props/components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container">
    <App/>
  </div>
);
