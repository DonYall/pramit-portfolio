import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2 relative bg-gradient-to-t from-black to-transparent">
      <div className="bg-black mx-8 md:mx-16 my-auto z-10 rounded-xl border-gray-500 border py-4 px-8 shadow-2xl shadow-gray-700 text-base md:text-xl lg:text-2xl font-light leading-none font-mono">
        &gt; &nbsp;
        <TypeAnimation sequence={["Hey", 1000, "I'm Pramit Shende", 1000, "Welcome to my website"]} wrapper="span" cursor={true} />
      </div>
      <div className="flex flex-col justify-center items-center z-10 gap-4">
        <img className="size-72 rounded-full object-cover mb-4" src="./headshot.jpeg" alt="avatar" />
        <h1 className="text-3xl font-semibold">Pramit Shende</h1>
        <span className="w-64 bg-white h-0.5 rounded-full"></span>
        <h2 className="font-montserrat">AEROSPACE ENGINEERING</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/pramitshende/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-white hover:text-cyan-200 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pramitshende@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-white hover:text-cyan-200 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+1-780-655-6096"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-white hover:text-cyan-200 transition-colors duration-300"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>

      <img src="./hero-bg-original.jpg" alt="hero" className="w-full h-full object-cover absolute -z-10" />
    </section>
  );
}

export default Hero;
