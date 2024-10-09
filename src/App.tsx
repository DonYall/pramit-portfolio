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

  const handleProjectClicked = (name: string) => {
    setProject(name);
  };

  const backClicked = () => {
    setProject("");
  };

  if (project) {
    return <ProjectPage name={project} onBackClicked={backClicked} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Projects onProjectClicked={handleProjectClicked} />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
