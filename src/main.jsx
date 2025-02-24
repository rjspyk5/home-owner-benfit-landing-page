import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Routing } from "./Routing/Routing.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
