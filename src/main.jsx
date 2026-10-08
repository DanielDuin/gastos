import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GastosContextProvider } from "./contexts/GastosProvider";
import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GastosContextProvider>
      <App />
    </GastosContextProvider>
  </StrictMode>
);
