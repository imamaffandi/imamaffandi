import { useState } from "react";
import { projects } from "../constant";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
        ease: "linear",
      },
    },
  };
  const itemLeft = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: "linear" },
    },
  };
  const right = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: "linear" },
    },
  };
  const up = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      transition: { ease: "linear" },
      y: 0,
      opacity: 1,
    },
  };
  function handleMouseMove(e) {
    const x = e.clientX;
    const y = e.clientY;
    setPosition({ x, y });
  }
  return (
    <>
      <section className="px-10 ">
        <motion.div variants={right} initial="hidden" whileInView="visible">
          <p className="sm:text-[18px] text-[14px] text-light uppercase neue tracking-wider">
            What just I make?
          </p>
          <h2 className="text-brand font-black text-5xl neue tracking-wider stroke-red-50">
            Projects
          </h2>
        </motion.div>
        <motion.p
          variants={up}
          initial="hidden"
          whileInView="visible"
          className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] poppins"
        >
          I am excited to offer my services as a web developer for your project.
          With over a year of experience in developing websites for a variety of
          clients, I am confident in my ability to create a stunning and
          functional website that meets your needs. My process begins with a
          thorough understanding of your project requirements and your target
          audience.
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="w-full flex-col justify-between items-center divide-y-2 text-white pt-20"
        >
          {projects.map((project) => {
            return (
              <motion.div
                variants={itemLeft}
                key={project.index}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredIndex(project.index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className=" flex justify-between items-center h-20 relative hover:opacity-80 "
              >
                {hoveredIndex === project.index && (
                  <div
                    className="flex-col gap-3 w-80 justify-around items-center z-20 glass overflow-hidden text-white poppins opacity-90"
                    style={{
                      position: "fixed",
                      left: position.x,
                      top: position.y,
                      marginTop: "10px",
                    }}
                    key={project.index}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover rounded-sm left-0 top-0"
                    />
                    <p className="w-full">{project.description}</p>
                  </div>
                )}
                <div className="flex justify-between items-center w-full  ">
                  <p className="neue text-2xl mx-5 font-light tracking-wide">
                    {" "}
                    {project.name}
                  </p>{" "}
                  <div className="flex gap-5">
                    <a
                      href={project.source}
                      target="_blank"
                      className="hover:text-brand"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </a>

                    <a
                      href={project.preview}
                      target="_blank"
                      className="hover:text-brand"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
