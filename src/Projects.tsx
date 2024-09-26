import ProjectCard from "./components/ProjectCard";
import { project } from "./config/defs";
import { projects } from "./config/projects";

function Projects() {
  return (
    <section className="w-full flex flex-wrap relative bg-black p-10 lg:px-40 lg:py-20 gap-6 justify-center">
      <h1 className="text-4xl font-normal font-montserrat leading-none text-white col-span-1 sm:col-span-2 xl:col-span-4 mb-12 w-full">PROJECTS</h1>
      {projects.map((project: project, index) => (
        <ProjectCard key={index} name={project.name} description={project.description} href={project.href} />
      ))}
    </section>
  );
}

export default Projects;
