import { project } from "../config/defs";

function ProjectCard({ name, description, img, className, onClick }: project & { onClick: (name: string) => void }) {
  return (
    <button
      className="border-white border flex flex-col justify-start rounded-3xl transition-transform duration-300 transform hover:scale-105 xl:w-[calc(25%-1.5rem)] md:w-[calc(50%-1.5rem)] bg-black/30"
      onClick={() => onClick(name)}
    >
      <img src={`./thumbnails/${img}`} alt={name} className={`w-full h-32 object-cover rounded-t-3xl ${className}`} />
      <div className={`p-8 ${className}`}>
        <h1 className="text-xl font-semibold text-white">{name}</h1>
        <p className="text-md mt-4 text-gray-300">{description}</p>
      </div>
    </button>
  );
}

export default ProjectCard;
