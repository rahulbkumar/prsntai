import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SLIDE_MANAGER from "./slide_manager.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SLIDE_MANAGER />
  </React.StrictMode>
);
