import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

// List of keywords to highlight
const HIGHLIGHT_KEYWORDS = [
  "frontend developer",
  "React",
  "Angular",
  "JavaScript",
  "JS",
  "HTML",
  "CSS",
  "Tailwind",
  "Tailwind CSS",
  "Framer Motion",
  "Medusa",
  "Medusa JS",
  "web applications",
  "innovation",
  "user experience",
  "solutions",
  "business growth",
];

const highlightText = (text) => {
  let modifiedText = text;

  HIGHLIGHT_KEYWORDS.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    modifiedText = modifiedText.replace(
      regex,
      `<span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-semibold">$1</span>`
    );
  });

  return modifiedText;
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 py-20 px-4 lg:px-0">
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl lg:text-5xl font-extralight mb-12 tracking-wide"
      >
        About <span className="text-purple-400">Me</span>
      </motion.h2>

      {/* Main Text */}
      <motion.p
        className="max-w-3xl mx-auto text-center text-neutral-300 text-lg lg:text-xl leading-relaxed tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        dangerouslySetInnerHTML={{ __html: highlightText(ABOUT_TEXT) }}
      />

      {/* YouTube Channel - Catchy */}
      {/* YouTube Channel - Professional & Catchy */}
      <motion.p
        className="max-w-3xl mx-auto text-center mt-8 text-2xl lg:text-3xl font-extrabold leading-snug tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 I host a YouTube channel{" "}
        <a
          href="https://www.youtube.com/@ezSyntaxx"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:scale-105 transform transition duration-300 inline-block"
        >
          ezSyntaxx
        </a>{" "}
        🎯 where I teach frontend development in a fun, interactive, and
        easy-to-learn style.
      </motion.p>

      {/* Accent line */}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 h-1 w-24 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mx-auto rounded-full"
      ></motion.div>
    </div>
  );
};

export default About;
