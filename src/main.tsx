import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./provider/page";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <HelmetProvider>
                <ThemeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </HelmetProvider>
        </StrictMode>
    );
}
