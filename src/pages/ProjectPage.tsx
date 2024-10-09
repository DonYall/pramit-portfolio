import { projects } from "../config/projects";
import Markdown from "react-markdown";
import Error from "./Error";
import { FaArrowLeft } from "react-icons/fa";
function ProjectPage() {
  const name = window.location.pathname.split("/")[2].toLowerCase();
  const project = projects.find((p) => p.name.toLowerCase().replace(" ", "-") === name);

  if (!project) {
    return <Error />;
  }

  return (
    <section className="min-h-screen bg-cover w-4/5 mx-auto py-16">
      <div className="flex items-center gap-4">
        <a href="/" className="text-2xl text-white hover:text-cyan-300 flex gap-2 items-center font-semibold mb-6">
          <FaArrowLeft />
          <span>Back</span>
        </a>
      </div>
      <h1 className="text-4xl font-semibold font-montserrat leading-none text-white mb-6 w-full">{project.name}</h1>
      <h2 className="text-2xl font-normal font-montserrat leading-none text-gray-300 mb-12 w-full">{project.subtitle}</h2>
      <span className="w-full h-1 bg-cyan-300 block mb-12" />
      <div className="w-full">
        <Markdown>{project.content}</Markdown>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {project.gallery &&
          project.gallery.map((img, index) => (
            <img key={index} src={`../project/${img}`} alt={project.name} className="w-full h-96 object-cover rounded-3xl" />
          ))}
      </div>
    </section>
  );
}

export default ProjectPage;
