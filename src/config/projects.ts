import { project } from "./defs";
const projects: project[] = [
  {
    name: "CA2RC-SAT",
    description:
      "Authored and led design review processes to apply for $350,000 in funding from the CSA. Team leads for thermal and structural subsystems of CA2RC-SAT, a 3U CubeSat set to launch into orbit.",
    href: "/project/ca2rc-sat",
    img: "default.jpeg",
    subtitle: "Thermal and Structural Lead",
    content: `
# CA2RC
Led the thermal and structural design of CA2RC-SAT, a 3U CubeSat set to launch into orbit. Authored and led design review processes to apply for $350,000 in funding from the CSA.

- bullet 1
- bullet 2
`,
    gallery: ["default.jpeg", "default.jpeg", "default.jpeg", "default.jpeg"],
  },
  {
    name: "High Altitude Balloon",
    description:
      "Designed and launched a high-altitude balloon to 30 km altitude to measure atmospheric, gravitational and magnetic field changes during a total eclipse. Led a team of 10 students to design, build, and launch the balloon.",
    href: "/project/high-altitude-balloon",
    img: "default.jpeg",
    subtitle: "Project Lead",
    content:
      "Led a team of 10 students to design, build, and launch a high-altitude balloon to 30 km altitude to measure atmospheric, gravitational and magnetic field changes during a total eclipse.",
  },
];

export { projects };
