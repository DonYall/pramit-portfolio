function ProjectCard({ name, description, href }: { name: string; description: string; href: string }) {
  return (
    <a
      className="border-white border p-8 rounded-2xl transition-transform duration-300 transform hover:scale-105"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <h1 className="text-2xl font-semibold text-white">{name}</h1>
      <p className="text-md mt-4 text-gray-300">{description}</p>
    </a>
  );
}

export default ProjectCard;
