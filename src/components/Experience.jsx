import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 py-20 px-4 lg:px-0">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl lg:text-5xl font-extralight mb-16 tracking-wide"
      >
        Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="p-6 bg-neutral-900 rounded-xl shadow-lg border-l-4 border-purple-400"
          >
            <p className="text-sm text-neutral-400">{exp.year}</p>
            <h6 className="mt-2 mb-2 font-semibold text-lg">
              {exp.role} -{" "}
              <span className="text-purple-400">{exp.company}</span>
            </h6>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm font-medium px-3 py-1 rounded bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
