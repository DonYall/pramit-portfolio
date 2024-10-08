import { skill } from "./defs";
import { FaGears, FaChartLine, FaCode, FaSliders } from "react-icons/fa6";

const iconClass = "w-full text-6xl mb-8";

const skills: skill[] = [
  {
    name: "Design",
    description: "Fusion 360, SolidWorks, Onshape",
    icon: <FaGears className={iconClass} />,
  },
  {
    name: "Simulation",
    description: "Ansys, SolidWorks Simulation",
    icon: <FaSliders className={iconClass} />,
  },
  {
    name: "Programming",
    description: "Python",
    icon: <FaCode className={iconClass} />,
  },
  {
    name: "Data Analysis",
    description: "Microsoft Excel, MATLAB",
    icon: <FaChartLine className={iconClass} />,
  },
];

export { skills };
