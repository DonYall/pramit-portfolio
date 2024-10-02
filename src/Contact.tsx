import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative">
      <div className="col-span-3 md:col-span-1 p-10 lg:p-40 my-auto flex flex-col items-start px-2 w-4/5 mx-auto md:w-fit md:px-10">
        <h1 className="text-4xl font-normal font-montserrat leading-none mb-8">CONTACT</h1>
        <h3 className="text-gray-300 hidden md:block">Email</h3>
        <a href="mailto:pramitshende@gmail.com" className="text-lg">
          pramitshende@gmail.com
        </a>
        <h3 className="mt-8 text-gray-300 hidden md:block">Phone</h3>
        <a href="tel:+17806556096" className="text-lg ">
          +1-780-655-6096
        </a>
        <div className="flex gap-4 mt-8">
          <a href="https://www.linkedin.com/in/pramitshende/" target="_blank" rel="noreferrer" className="text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:pramitshende@gmail.com" className="text-2xl">
            <FaEnvelope />
          </a>
          <a href="tel:+1-780-655-6096" target="_blank" rel="noreferrer" className="text-2xl">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center z-10 gap-4 py-12">
        <form className="flex flex-col gap-8 px-8 py-12 w-4/5 lg:w-1/2" action="https://formspree.io/f/mvgpeezz" method="POST">
          <input name="Name" type="text" placeholder="Name*" className="py-2 px-4 bg-black/75 rounded-lg text-sm border border-gray-400" required />
          <input
            name="Email"
            type="email"
            placeholder="Email*"
            className="py-2 px-4 bg-black/75 rounded-lg text-sm border border-gray-400"
            required
          />
          <input name="Phone" type="tel" placeholder="Phone" className="py-2 px-4 bg-black/75 rounded-lg text-sm border border-gray-400" />
          <textarea name="Message" placeholder="Message*" className="py-2 px-4 bg-black/75 rounded-lg text-sm border border-gray-400" />
          <button className="p-2 rounded-lg border-2 bg-black/80 border-gray-700 hover:border-white transition-colors duration-300" type="submit">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
