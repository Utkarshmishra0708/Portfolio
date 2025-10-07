import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl lg:text-5xl font-extralight mb-16 tracking-wide"
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-wrap gap-8 items-center justify-center"
            whileHover={{ scale: 1.02 }}
          >
            {/* Image */}
            <motion.a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/4 flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl border-4 border-neutral-800 shadow-lg"
              />
            </motion.a>

            {/* Text */}
            <div className="w-full lg:w-3/4 max-w-xl text-neutral-300">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-neutral-900 text-purple-400 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
