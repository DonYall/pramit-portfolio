import { project } from "../config/defs";

function ProjectCard({ name, slug, subtitle, organization, img, className, onClick }: project & { onClick: (slug: string) => void }) {
  return (
    <button
      className="border-white border flex flex-col justify-start rounded-3xl transition-transform duration-300 transform hover:scale-105 xl:w-[calc(25%-1.5rem)] w-full md:w-[calc(50%-1.5rem)] bg-black/30"
      onClick={() => onClick(slug)}
    >
      <img src={`./thumbnails/${img}`} alt={name} className={`w-full h-44 object-cover rounded-t-3xl ${className}`} />
      <div className={`p-6 w-full ${className}`}>
        <h2 className="text-md text-gray-300 text-center">{organization}</h2>
        <h2 className="text-xl mt-2 font-semibold text-center">{name}</h2>
        <p className="text-md mt-2 text-gray-300">{subtitle}</p>
      </div>
    </button>
  );
}

export default ProjectCard;
