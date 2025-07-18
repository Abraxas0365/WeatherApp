import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Background from "./header";
import Weather from "./weather_widget";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Background />
    <Weather />
  </StrictMode>
);
