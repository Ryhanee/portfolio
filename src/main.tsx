import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import ThemeProvider from "./provider/page";
import LangProvider from "./provider/lang";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <LangProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LangProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
