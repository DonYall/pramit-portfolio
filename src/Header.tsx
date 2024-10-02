import { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollTo(index: number) {
    const sections = document.querySelectorAll("section");
    sections[index].scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }

  return (
    <>
      <section className="hidden font-semibold md:flex items-center w-full absolute px-4 md:px-12 lg:px-48 pt-6 pb-12 gap-12 bg-gradient-to-b from-black to-transparent z-20">
        <button className="h-16 mr-auto text-xl hover:text-cyan-300 flex-shrink-0" onClick={() => scrollTo(1)}>
          <img src="./logo.png" alt="logo" className="h-full" />
        </button>
        <button className="w-20 text-2xl hover:text-cyan-300" onClick={() => scrollTo(1)}>
          Home
        </button>
        <button className="w-20 text-2xl hover:text-cyan-300" onClick={() => scrollTo(2)}>
          About
        </button>
        <button className="w-20 text-2xl hover:text-cyan-300" onClick={() => scrollTo(3)}>
          Projects
        </button>
        <button className="w-20 text-2xl hover:text-cyan-300" onClick={() => scrollTo(4)}>
          Contact
        </button>
        <div className="gap-2 ml-8 hidden lg:flex">
          <a href="https://www.linkedin.com/in/pramitshende/" target="_blank" rel="noreferrer" className="w-16 h-full text-xl hover:text-cyan-300">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="mailto:pramitshende@gmail.com" target="_blank" rel="noreferrer" className="w-16 h-full text-xl hover:text-cyan-300">
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </section>
      <button className="md:hidden fixed top-0 right-0 p-2 text-4xl z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IoMenu />
      </button>
      <nav
        className={`fixed top-0 right-0 h-screen w-screen bg-black/90 flex flex-col items-center justify-center gap-4 z-40 transition-all duration-500 font-semibold text-3xl ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <img src="./logo.png" alt="logo" className="h-24 mb-12" />
        <button className="hover:text-cyan-300" onClick={() => scrollTo(1)}>
          Home
        </button>
        <button className="hover:text-cyan-300" onClick={() => scrollTo(2)}>
          About
        </button>
        <button className="hover:text-cyan-300" onClick={() => scrollTo(3)}>
          Projects
        </button>
        <button className="hover:text-cyan-300" onClick={() => scrollTo(4)}>
          Contact
        </button>
      </nav>
    </>
  );
}

export default Navbar;
