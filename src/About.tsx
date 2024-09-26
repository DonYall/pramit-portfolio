import { skills } from "./config/skills";
import SkillCard from "./components/SkillCard";

function About() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 relative bg-gradient-to-b from-black to-transparent">
      <div className="col-span-2 lg:col-span-1 p-10 lg:p-40 lg:pr-16 my-auto">
        <h1 className="text-4xl font-normal font-montserrat leading-none">ABOUT</h1>
        <p className="text-lg mt-8 text-gray-300">
          I am a 2nd year aerospace engineering co-op student at Carleton University. I have learnt and developed many technical skills and am eager
          to apply my knowledge to real-world engineering problems. I am always looking for opportunities to grow and learn in the aerospace industry
          and am committed to making a significant impact in the field of Aerospace Engineering.
        </p>
      </div>
      <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-8 p-10 lg:p-20">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} description={skill.description} icon={skill.icon} />
        ))}
      </div>
      <img src="./about-bg.png" alt="hero" className="w-full h-full object-cover object-bottom absolute -z-10" />
    </section>
  );
}

export default About;
