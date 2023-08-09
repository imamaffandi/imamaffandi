import { useState } from "react";
import { Link } from "react-scroll";
import { links } from "../constant";

const Navbar = () => {
  const [active, setActive] = useState("");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-transparent fixed inset-x-0 bottom-0 w-full flex justify-center z-50">
      <div className=" flex justify-around glass border-2 border-brand items-center w-3/4 md:w-[40%] rounded-sm p-3 m-3 ">
        <div className=" items-center flex justify-around cursor-pointer">
          <div
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              scrollToTop();
            }}
          >
            <p className="font-black text-brand tracking-widest neue text-xl">
              <span className="hidden lg:inline-block text-white">
                Imam &nbsp;
              </span>
              Affandi
            </p>
          </div>
        </div>
        <ul className="flex gap-3 text-sm md:text-lg ">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth="true"
                  duration={500}
                  className={`${
                    active === link.title ? "text-brand" : "text-white"
                  } font-semibold neue tracking-widest cursor-pointer hover:text-red-400`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
