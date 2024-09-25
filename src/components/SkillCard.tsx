import { skill } from "../config/defs";

function SkillCard({ name, description, icon }: skill) {
  return (
    <div className="col-span-2 md:col-span-1 border-white border rounded-3xl transition-transform duration-300 transform hover:scale-105">
      <div className="p-8 flex flex-col justify-center items-center h-full">
        {icon}
        <h1 className="text-xl font-semibold text-white text-center">{name}</h1>
        <p className="text-md mt-4 text-gray-300 text-center">{description}</p>
      </div>
    </div>
  );
}

export default SkillCard;
