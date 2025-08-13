import { createRoot } from "react-dom/client";
import "@/index.css";
import { QueryProvider } from "./app/providers/queryProviders";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import Router from "./app/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
);
