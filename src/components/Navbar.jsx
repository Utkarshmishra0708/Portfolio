import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex fle-shrink-0 items-center">
        <motion.h3
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className="mx-2 w-10 font-extrabold cursor-default"
        >
          PORTFOLIO
        </motion.h3>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href="https://github.com/Utkarshmishra0708"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/utkarsh-mishra-b196181aa/"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href="https://www.instagram.com/mr_heathen_/"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          href="https://twitter.com/_utkarshh__"
        >
          <FaTwitterSquare />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
