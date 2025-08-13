import "./index.css";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/router.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(
    rootElement,
    <BrowserRouter>
      <Router />
    </BrowserRouter>,
  );
}
