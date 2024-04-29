import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SidebarProvider } from "./context/sidebarContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
