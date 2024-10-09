import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import ProjectPage from "./pages/ProjectPage";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </>
        }
      />
      <Route path="project" element={<ProjectPage />}>
        <Route path=":name" element={<ProjectPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
