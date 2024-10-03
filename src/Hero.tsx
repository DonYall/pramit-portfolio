import { FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2 relative">
      <div className="absolute h-screen flex items-center">
        <img className="relative object-cover md:w-1/2 my-auto brightness-[0.25] md:brightness-75" src="./earf.png" />
        <div className="absolute w-1/2 py-4 bg-cyan-600/50 rounded-l rounded-full mt-96 hidden lg:flex justify-around">
          <a href="https://carleton.ca" target="_blank" rel="noreferrer">
            <img className="h-16" src="./logos/carleton.png" alt="Carleton" />
          </a>
          <a href="https://ca2rc.ca" target="_blank" rel="noreferrer">
            <img className="h-16" src="./logos/ca2rc.png" alt="CA2RC" />
          </a>
          <a href="https://spacecopy.com" target="_blank" rel="noreferrer">
            <img className="h-16" src="./logos/spacecopy.webp" alt="Spacecopy" />
          </a>
          <a href="https://starlabsurat.com/" target="_blank" rel="noreferrer">
            <img className="h-16" src="./logos/star.png" alt="Star" />
          </a>
        </div>
      </div>
      <div className="bg-black/80 mx-8 md:mx-16 my-auto mb-0 md:mb-auto z-10 rounded-xl border-gray-500 border py-4 px-8 shadow-2xl shadow-gray-700 text-base md:text-xl lg:text-2xl font-light leading-none font-mono animate-appear-down">
        &gt; &nbsp;
        <TypeAnimation sequence={["Hey", 1000, "I'm Pramit Shende", 1000, "Welcome to my website"]} wrapper="span" cursor={true} />
      </div>
      <div className="flex flex-col justify-center items-center z-10 gap-4 animate-appear-up">
        <img className="size-72 rounded-full object-cover mb-4" src="./headshot.jpeg" alt="avatar" />
        <h1 className="text-3xl font-semibold">Pramit Shende</h1>
        <span className="w-64 bg-white h-0.5 rounded-full"></span>
        <h2 className="font-montserrat">AEROSPACE ENGINEERING</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/pramitshende/"
            target="_blank"
            rel="noreferrer"
            className="text-lg bg-white text-black font-bold hover:bg-cyan-200 transition-colors duration-300 rounded-lg border p-4 leading-none"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/pramitshende/"
            target="_blank"
            rel="noreferrer"
            className="text-xl bg-white text-black hover:bg-cyan-200 transition-colors duration-300 my-auto p-4 rounded-lg"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
