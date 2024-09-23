function Navbar() {
  function scrollTo(index: number) {
    const sections = document.querySelectorAll("section");
    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hidden md:flex w-full absolute px-16 pt-8 pb-16 gap-12 bg-gradient-to-b from-black to-transparent z-10">
      <button className="w-16 text-xl hover:font-semibold" onClick={() => scrollTo(1)}>
        Home
      </button>
      <button className="w-16 text-xl hover:font-semibold" onClick={() => scrollTo(2)}>
        About
      </button>
      <button className="w-16 text-xl hover:font-semibold" onClick={() => scrollTo(3)}>
        Projects
      </button>
      <button className="w-16 text-xl hover:font-semibold" onClick={() => scrollTo(4)}>
        Contact
      </button>
    </section>
  );
}

export default Navbar;
