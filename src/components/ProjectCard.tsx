import { project } from "../config/defs";

function ProjectCard({ name, description, href, img }: project) {
  return (
    <a
      className="border-white border rounded-2xl transition-transform duration-300 transform hover:scale-105"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={img || "./thumbnails/default.png"} alt={name} className="w-full h-32 object-cover rounded-t-2xl" />
      <div className="p-8">
        <h1 className="text-xl font-semibold text-white">{name}</h1>
        <p className="text-md mt-4 text-gray-300">{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
