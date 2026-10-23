import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./motion/gsap";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
