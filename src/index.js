import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { createMemoryRouter, RouterProvider } from 'found';
import React from "react";
import routes from "./routes";

const BrowserRouter = createBrowserRouter({ routes });

ReactDOM.render(
  <RouterProvider BrowserRouter={BrowserRouter}>
    {routes}
  </RouterProvider>,
  document.getElementById('root')
);
