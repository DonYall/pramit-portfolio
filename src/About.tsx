function About() {
  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-3 relative bg-gradient-to-b from-black to-transparent">
      <div className="col-span-3 md:col-span-2 p-10 md:p-40 my-auto">
        <h1 className="text-4xl font-normal font-montserrat leading-none">ABOUT</h1>
        <p className="text-lg mt-8 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit nec nunc consectetur ultricies. Donec auctor, nunc quis ultricies
          varius, lacus metus vestibulum libero, nec dictum nunc libero in mi. Sed auctor, metus nec ultricies varius, libero nunc ultricies libero,
          nec dictum nunc libero in mi.
        </p>
        <p className="text-lg mt-4 text-gray-300">
          Sed auctor, metus nec ultricies varius, libero nunc ultricies libero, nec dictum nunc libero in mi. Sed auctor, metus nec ultricies varius,
          libero nunc ultricies libero, nec dictum nunc libero in mi.
        </p>
      </div>
      <img src="/about-bg.png" alt="hero" className="w-full h-full object-cover object-bottom absolute -z-10" />
    </section>
  );
}

export default About;
