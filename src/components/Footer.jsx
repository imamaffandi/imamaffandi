import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import {
  email,
  github,
  instagram,
  location,
  twitter,
  whatsapp,
} from "../assets";

const Footer = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //
    //
    //
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Affandi",
          from_email: form.email,
          to_email: "imamaffandi715@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you ASAP!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error), alert("something went wrong");
        }
      );
  };
  return (
    <section className=" sm:h-screen flex flex-col-reverse sm:flex-row  justify-evenly text-white sm:items-baseline sm:m-0 sm:p-20 pb-20">
      <div className=" flex flex-col gap-10 items-start sm:items-center p-2 ">
        <div className="flex">
          <h1 className="text-lg m-2 font-bold hidden sm:block neue tracking-wider">
            Imam <span className="text-brand"> Affandi</span>
          </h1>
        </div>
        <div>
          {" "}
          <div className=" flex items-center gap-3 pt-3 cursor-pointer">
            <img src={whatsapp} alt="" className="h-5 w-5" />
            <p className="poppins">+6281230677319</p>
          </div>
          <div className=" flex items-center gap-3 pt-3 cursor-pointer">
            <img src={location} alt="" className="h-5 w-5" />
            <p className="poppins">Malang, Indonesia</p>
          </div>
          <div className=" flex items-center gap-3 pt-3 cursor-pointer">
            <img src={email} alt="" className="h-5 w-5" />
            <p className="poppins">Imamaffandi715@gmail.com</p>
          </div>
          <div className="flex flex-row gap-5 mt-3">
            <a href="https://github.com/imamaffandi" target="_blank">
              <img src={github} alt="" className="" />
            </a>
            <a href="https://twitter.com/Imamaffandi99" target="_blank">
              <img src={twitter} alt="" className="" />
            </a>

            <a href="https://www.instagram.com/imamaffandi01/" target="_blank">
              <img src={instagram} alt="" className="" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-32">
        <div className="flex-col items-center justify-around gap-5 m-5">
          {" "}
          <h1 className="text-5xl text-mid font-black neue tracking-wider">
            Connect with me{" "}
          </h1>
        </div>
        <div className="xl:mt-12 px-15 overflow:hidden sm:object-scale-down">
          <div className="flex-[0.75] border-2 border-brand p-8 rounded-2xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 neue tracking-wider">
                  Your name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Whats your name?"
                  className="border-2 border-mid glass py-2 px-6 text-white rounded-lg poppins outlined-none font-light"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 neue tracking-wider">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="border-2 border-mid glass py-2 px-6 text-white rounded-lg poppins outlined-none font-light"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2 neue tracking-wider">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="border-2 border-mid glass py-2 px-6 text-white rounded-lg poppins outlined-none font-light"
                />
              </label>
              <button
                type="submit"
                className="hover:bg-mid border-2 border-mid py-3 px-8 outline-none w-fit text-white font-bold shadow-md  rounded-xl z-20 neue tracking-widest"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Footer, "contact");
