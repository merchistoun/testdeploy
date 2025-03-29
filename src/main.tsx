import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.css";

// Initialize i18n
import initializeTranslation from "./localization";
const FALLBACK_LOCALE = "en";
const initializeI18n = async () => {
  await initializeTranslation(navigator.language || FALLBACK_LOCALE);
};
initializeI18n();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
