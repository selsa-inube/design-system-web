import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { FlagProvider } from "@inubekit/flag";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <FlagProvider>
      <App />
    </FlagProvider>
  </React.StrictMode>,
);
