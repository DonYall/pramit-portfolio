import { useState, useRef, useEffect } from "react";
import { skills } from "./config/skills";
import SkillCard from "./components/SkillCard";

function About() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { rootMargin: "0px 0px -100px 0px" },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 relative" ref={ref}>
      <div className="col-span-2 lg:col-span-1 p-10 lg:p-40 lg:pr-16 my-auto">
        <h1 className="text-4xl font-normal font-montserrat leading-none">ABOUT</h1>
        <p className="text-md mt-8 text-gray-300">
          I am a 2nd year aerospace engineering co-op student at Carleton University. I have learnt and developed many technical skills and am eager to apply my
          knowledge to real-world engineering problems. I am Always looking for opportunities to grow and learn in the aerospace industry and am committed to
          making a significant impact in the field of Aerospace Engineering.
        </p>
        <p className="text-md mt-8 text-gray-300">
          My passion for aerospace stems from the ability to engineer “seemingly” impossible technologies. From the Apollo missions to reusable boosters, goals
          that were seemingly impossible were accomplished successfully through complex engineering. Similarly, I hope to be at the forefront of engineering
          innovations, enabling the solutions for future “impossible” feats.
        </p>
      </div>
      <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-8 p-10 lg:p-20">
        {/* HASHIRS IDEA EXPAND */}
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            description={skill.description}
            icon={skill.icon}
            className={`transition-opacity duration-[2s] ${isIntersecting ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default About;
