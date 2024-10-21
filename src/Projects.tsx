import { useEffect, useRef, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { project } from "./config/defs";
import { projects } from "./config/projects";

function Projects({ onProjectClicked }: { onProjectClicked: (slug: string) => void }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex flex-wrap relative p-10 lg:px-40 lg:py-20 gap-6 justify-center" ref={ref}>
      <h1 className="text-4xl font-normal font-montserrat leading-none text-white col-span-1 sm:col-span-2 xl:col-span-4 mb-12 w-full">PROJECTS</h1>
      {projects.map((project: project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          slug={project.slug}
          subtitle={project.subtitle}
          organization={project.organization}
          href={project.href}
          img={project.img}
          onClick={onProjectClicked}
          className={`transition-opacity duration-[2s] ${isIntersecting ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </section>
  );
}

export default Projects;
