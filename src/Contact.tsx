import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2 relative bg-gradient-to-b from-black to-transparent">
      <div className="col-span-3 md:col-span-1 p-10 md:p-40 my-auto flex flex-col items-start px-2 w-4/5 mx-auto md:w-fit md:px-10">
        <h1 className="text-4xl font-normal font-montserrat leading-none">CONTACT</h1>
        <h3 className="mt-8 text-gray-300">Email</h3>
        <a href="mailto:pramitshende@gmail.com" className="text-lg">
          pramitshende@gmail.com
        </a>
        <h3 className="mt-8 text-gray-300">Phone</h3>
        <a href="tel:+17806556096" className="text-lg ">
          +1-780-655-6096
        </a>
        <div className="flex gap-4 mt-8">
          <a href="https://www.linkedin.com/in/pramitshende/" target="_blank" rel="noreferrer" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:pramitshende@gmail.com" target="_blank" rel="noreferrer" className="text-2xl">
            <FaEnvelope />
          </a>
          <a href="tel:+1-780-655-6096" target="_blank" rel="noreferrer" className="text-2xl">
            <FaPhoneAlt />
          </a>
          <a href="https://www.instagram.com/pramitshende/" target="_blank" rel="noreferrer" className="text-2xl">
            <AiFillInstagram />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-10 gap-4 py-12">
        <form
          className="flex flex-col gap-8 px-8 py-12 bg-black rounded-xl border-gray-500 border shadow-2xl shadow-gray-700 w-4/5 md:w-1/2"
          action=""
        >
          <input type="text" placeholder="Name*" className="py-2 px-4 bg-gray-800 rounded-lg text-sm" required />
          <input type="email" placeholder="Email*" className="py-2 px-4 bg-gray-800 rounded-lg text-sm" required />
          <input type="tel" placeholder="Phone" className="py-2 px-4 bg-gray-800 rounded-lg text-sm" />
          <textarea placeholder="Message*" className="py-2 px-4 bg-gray-800 rounded-lg text-sm" />
          <button className="p-2 rounded-lg border-2 border-gray-800 hover:border-white transition-colors duration-300" type="submit">
            SEND
          </button>
        </form>
      </div>
      {/* <img src="/hero-bg.jpg" alt="hero" className="w-full h-full object-cover absolute -z-10" /> */}
    </section>
  );
}

export default Contact;
