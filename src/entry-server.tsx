import "./index.css";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Router from "@/app/router";

export const render = (url: string) => {
  return renderToString(
    <StaticRouter location={url}>
      {/* <RouterProvider router={router} /> */}
      <Router />
    </StaticRouter>,
  );
};
