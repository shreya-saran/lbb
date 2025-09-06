import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
      className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white py-20 px-6 text-center relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
        className="text-3xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-2"
      >
        Ready to Assemble Your Squad? <span></span>
      </motion.h2>

      {/* Subtext */}
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-lg text-white/90 mb-10"
      >
        Join thousands of satisfied customers who’ve experienced our legendary
        service!
      </motion.p>

      {/* Call-to-action button */}
      <motion.a
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#"
        className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition"
      >
        🔥 Get Started Now – It&apos;s Free!
      </motion.a>

      {/* Disclaimer */}
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-sm text-white/80 mt-8"
      >
        * This is a parody app for entertainment purposes only! No actual fights
        involved! 😅
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
