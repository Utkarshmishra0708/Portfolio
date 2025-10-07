import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Utkarshmishra0708",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/utkarsh-mishra-b196181aa/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ezsyntaxx?utm_source=ig_web_button_share_sheet&igsh=MTBhYmFqMnRsM25qbQ==",
    },
    {
      icon: <FaTwitterSquare />,
      link: "https://twitter.com/_utkarshh__",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@ezSyntaxx",
    },
  ];

  return (
    <nav className="mb-16 flex items-center justify-between py-6 text-neutral-200">
      <motion.h3
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
      >
        UTKARSH<span className="text-neutral-400">.DEV</span>
      </motion.h3>

      <div className="flex gap-5 text-2xl">
        {socialLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-purple-400 transition-colors duration-300"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
