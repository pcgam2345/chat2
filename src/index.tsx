import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Conversational } from "./screens/Conversational";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Conversational />
  </StrictMode>,
);
