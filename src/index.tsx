// react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// app
import App from "./app/App.tsx";
// providers
import { StoreProvider } from "./app/providers/StoreProvider.tsx";
// libs
import { Toaster } from "react-hot-toast";
// styles
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StoreProvider>
);
