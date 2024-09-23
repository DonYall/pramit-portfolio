import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./Hero.tsx";
import "./index.css";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Navbar from "./Navbar.tsx";
import Projects from "./Projects.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </StrictMode>,
);
