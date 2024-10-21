import { projects } from "../config/projects";
import Markdown from "react-markdown";
import Error from "./Error";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
function ProjectPage({ slug: slug, onBackClicked }: { slug: string; onBackClicked: () => void }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Error />;
  }

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen bg-cover w-4/5 mx-auto py-16">
      <div className="flex items-center gap-4">
        <button className="text-2xl text-white hover:text-cyan-300 flex gap-2 items-center font-semibold mb-6" onClick={onBackClicked}>
          <FaArrowLeft />
          <span>Back</span>
        </button>
      </div>
      {project.href ? (
        <a href={project.href} target="_blank" className="block w-fit">
          <h1 className="text-4xl font-semibold font-montserrat leading-none text-white mb-6 w-fit hover:underline">{project.name}</h1>
        </a>
      ) : (
        <h1 className="text-4xl font-semibold font-montserrat leading-none text-white mb-6 w-fit">{project.name}</h1>
      )}

      <h2 className="text-2xl font-normal font-montserrat leading-none text-gray-300 mb-12 w-full">
        {project.subtitle} <span className="text-cyan-300 opacity-70 font-light"> • {project.organization}</span>
      </h2>
      <span className="w-full h-1 bg-cyan-300 block mb-12" />
      <div className="w-full max-w-full prose text-white prose-headings:text-white prose-a:text-cyan-300">
        <Markdown>{project.content}</Markdown>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {project.gallery &&
          project.gallery.map((img, index) => (
            <div key={index}>
              <img src={`../project/${img.src}`} alt={project.name} className="w-full h-96 object-cover rounded-3xl" />
              <p className="text-md mt-2 text-gray-300">{img.caption}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default ProjectPage;
