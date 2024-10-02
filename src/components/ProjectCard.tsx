import { project } from "../config/defs";

function ProjectCard({ name, description, href, img, className }: project) {
  return (
    <a
      className="border-white border rounded-3xl transition-transform duration-300 transform hover:scale-105 xl:w-[calc(25%-1.5rem)] md:w-[calc(50%-1.5rem)] bg-black/30"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <img src={img || "./thumbnails/default.jpeg"} alt={name} className={`w-full h-32 object-cover rounded-t-3xl ${className}`} />
      <div className={`p-8 ${className}`}>
        <h1 className="text-xl font-semibold text-white">{name}</h1>
        <p className="text-md mt-4 text-gray-300">{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
