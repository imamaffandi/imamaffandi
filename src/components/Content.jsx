import { technologies } from "../constant";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { right, up, container, itemUp } from "../utils/motion";
const Content = () => {
  return (
    <main className="px-10">
      <motion.section
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div>
          <p className="sm:text-[18px] text-[14px] text-light  uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-mid font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Overview.
          </h2>
        </div>
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
          audience. I will work with you to determine the best approach to
          design and development, including the platform, layout, and features
          that will be necessary to achieve your goals.
          <span className="hidden sm:inline">
            From there, I will create wireframes and prototypes to ensure that
            the design and functionality are both user-friendly and visually
            appealing. Once the design is finalized, I will begin coding the
            website, using the latest coding standards and best practices to
            ensure that the site is fast, secure, and optimized for search
            engines. Throughout the development process, I will keep you
            informed of my progress and will be open to feedback and revisions
            to ensure that the final product meets your expectations. In
            addition to my technical skills, I am also a strong communicator and
            project manager, ensuring that your project stays on schedule and
            within budget. Thank you for considering me for your web development
            project. I look forward to discussing the details further and
            answering any questions you may have.
          </span>
        </motion.p>
      </motion.section>
      {/* Skill */}
      <section className="py-32">
        <motion.div variants={right} initial="hidden" whileInView="visible">
          <p className="sm:text-[18px] text-[14px] text-light uppercase tracking-wider">
            What can I do?
          </p>
          <h2 className="text-mid font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skill
          </h2>
        </motion.div>
        <motion.div
          className="w-full flex justify-around items-center gap-3 py-10 flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {technologies.map((tech) => {
            return (
              <motion.div variants={itemUp} key={tech.index}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-20 object-cover opacity-50 hover:opacity-100 cursor-pointer"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
};

export default SectionWrapper(Content, "about");