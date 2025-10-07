import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const TECH_STACKS = [
  { name: "React", icon: <SiReact className="w-10 h-10" /> },
  { name: "HTML", icon: <SiHtml5 className="w-10 h-10" /> },
  { name: "CSS", icon: <SiCss3 className="w-10 h-10" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10" /> },
];

const Technologies = () => {
  return (
    <div className="py-20 px-4 lg:px-0 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl lg:text-5xl font-extralight mb-12 tracking-wide"
      >
        Technologies <span className="text-purple-400">I Use</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {TECH_STACKS.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-neutral-800 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-cyan-400 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            {tech.icon}
            <span className="text-neutral-200 font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
