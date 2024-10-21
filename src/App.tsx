import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Header";
import Hero from "./Hero";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./Projects";
import { useState } from "react";

function App() {
  const [project, setProject] = useState("");

  window.addEventListener("hashchange", () => {
    if (window.location.hash === "") {
      setProject("");
    } else {
      setProject(window.location.hash.substring(1));
    }
  });

  const handleProjectClicked = (slug: string) => {
    window.location.hash = slug;
    setProject(slug);
  };

  const backClicked = () => {
    window.location.hash = "";
    setProject("");
  };

  if (project) {
    return <ProjectPage slug={project} onBackClicked={backClicked} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects onProjectClicked={handleProjectClicked} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
