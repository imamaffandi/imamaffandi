import { useRef, useState } from "react";
import { projects } from "../constant";
import { SectionWrapper } from "../hoc";
import { right, up, container, itemLeft } from "../utils/motion";
import { motion } from "framer-motion";
const Projects = () => {
  const imageRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }
  return (
    <>
      <section className="px-10 ">
        <motion.div variants={right} initial="hidden" whileInView="visible">
          <p className="sm:text-[18px] text-[14px] text-light uppercase tracking-wider">
            What just I make?
          </p>
          <h2 className="text-mid font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
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
              <motion.a
                variants={itemLeft}
                href={project.source_code_link}
                key={project.index}
                target="_blank"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredIndex(project.index)}
                onMouseLeave={() => setHoveredIndex(-1)}
                className=" flex justify-between items-center h-20 relative hover:text-brand "
              >
                {hoveredIndex === project.index && (
                  <div
                    className="flex gap-3 justify-around items-center z-20 glass overflow-hidden"
                    ref={imageRef}
                    style={{
                      position: "fixed",
                      left: position.x,
                      top: position.y,
                    }}
                    key={project.index}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className=" w-64 h-48 object-cover rounded-sm left-0 top-0"
                    />
                    <p className="text-[17px] max-w-md hidden md:block">
                      {project.description}
                    </p>
                  </div>
                )}
                <div className="flex justify-between items-center w-full  ">
                  <p className="neue text-2xl mx-5 font-light tracking-wide">
                    {" "}
                    {project.name}
                  </p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
