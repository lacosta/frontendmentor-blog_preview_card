// @packages
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// @own
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
