import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, duration: 0.5 },
  },
});

const Hero = () => {
  return (
    <section className="flex flex-wrap items-center gap-10 lg:gap-0 py-20">
      {/* Text */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-6xl lg:text-8xl font-extralight tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Utkarsh Mishra
        </motion.h1>

        <motion.h2
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="mt-2 text-3xl lg:text-4xl bg-gradient-to-r from-pink-400 via-slate-400 to-purple-400 bg-clip-text text-transparent"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="mt-4 max-w-xl text-neutral-300 font-light tracking-tight text-lg lg:text-xl"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
        {/* Shadow glow behind the image */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950 opacity-60 blur-xl z-0"></div>

        <motion.img
          src={profilePic}
          alt="Utkarsh"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="rounded-2xl border-4 border-neutral-800 shadow-lg relative z-10 w-3/4 lg:w-2/3 max-w-sm filter brightness-90"
          style={{
            maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 70%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
