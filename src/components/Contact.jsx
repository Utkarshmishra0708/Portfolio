import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="border-b border-neutral-800 py-20 text-center text-neutral-200">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl mb-8"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mb-4 text-neutral-400"
      >
        {CONTACT.address}
      </motion.p>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="mb-4 text-neutral-400"
      >
        {CONTACT.phoneNo}
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        href={`mailto:${CONTACT.email}`}
        className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-purple-400 to-cyan-400 text-neutral-950 font-semibold rounded-lg shadow-lg transition-transform"
      >
        <Mail className="w-5 h-5" />
        {CONTACT.email}
      </motion.a>
    </section>
  );
};

export default Contact;
