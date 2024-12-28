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
        <h2 className="text-4xl font-normal font-montserrat leading-none">ABOUT</h2>
        <p className="text-md mt-8 text-gray-300">
          I am a second-year aerospace engineering co-op student at Carleton University with a strong foundation in technical skills and a passion for applying
          my knowledge to real-world engineering challenges. I am constantly seeking opportunities to grow and learn within the aerospace industry, driven by a
          commitment to making a meaningful impact in the field of aerospace engineering.
        </p>
        <p className="text-md mt-8 text-gray-300">
          My passion for aerospace comes from the ability to engineer technologies that once seemed impossible. From the Apollo missions to reusable rockets,
          challenges once deemed insurmountable were overcome through advanced engineering. Likewise, I aspire to be at the forefront of groundbreaking
          innovations, contributing to solutions that achieve the "impossible" in the future.
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
