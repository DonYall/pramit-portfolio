import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./Hero.tsx";
import "./index.css";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Navbar from "./Header.tsx";
import Projects from "./Projects.tsx";
import Footer from "./Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
);
