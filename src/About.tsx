function About() {
  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-3 relative bg-gradient-to-b from-black to-transparent">
      <div className="col-span-3 md:col-span-2 p-10 md:p-40 my-auto">
        <h1 className="text-4xl font-normal font-montserrat leading-none">ABOUT</h1>
        <p className="text-lg mt-8 text-gray-300">
          CA2RC is a student-led club to design, build, test and launch our first Cubesat project at Carleton University. Our team consists of 30
          determined students from Carleton University's Engineering, Physics and Computer Science departments.
        </p>
        <p className="text-lg mt-4 text-gray-300">
          We provide a 3 month training program to familiarize our members with electronics, aerospace principles, physics, material science,
          radiation, amateur radio training, error mitigation, testing methods and cubesat subsystems to bring all students to the same core level of
          proficiency. Our training is in-line with Canadian Space Agency (CSA), European Space Agency (ESA) and NASA Cubesat requirements.
        </p>
      </div>
      <img src="./about-bg.png" alt="hero" className="w-full h-full object-cover object-bottom absolute -z-10" />
    </section>
  );
}

export default About;
