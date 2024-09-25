import ProjectCard from "./components/ProjectCard";
import { project } from "./config/defs";
import { projects } from "./config/projects";

function Projects() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 relative bg-black p-10 lg:px-40 lg:py-20 gap-6">
      <h1 className="text-4xl font-normal font-montserrat leading-none text-white col-span-1 sm:col-span-2 xl:col-span-4 mb-12">PROJECTS</h1>
      {projects.map((project: project, index) => (
        <ProjectCard key={index} name={project.name} description={project.description} href={project.href} />
      ))}
    </section>
  );
}

export default Projects;
