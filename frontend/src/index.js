import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App";

// Suppress known benign ResizeObserver errors from Radix UI / Select components
const OriginalResizeObserver = window.ResizeObserver;
if (OriginalResizeObserver) {
  window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
    constructor(callback) {
      super((entries, observer) => {
        window.requestAnimationFrame(() => {
          if (!Array.isArray(entries) || !entries.length) return;
          try {
            callback(entries, observer);
          } catch (e) {
            console.error(e);
          }
        });
      });
    }
  };
}

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
