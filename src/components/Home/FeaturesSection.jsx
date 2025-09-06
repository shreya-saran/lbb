import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const FeaturesSection = () => {
  const steps = [
    {
      number: "1",
      color: "bg-orange-500",
      icon: "📍",
      title: "Choose Location",
      description: "Pick where the epic showdown will happen!"
    },
    {
      number: "2",
      color: "bg-purple-500",
      icon: "🏠",
      title: "Enter Address",
      description: "Tell us where to send the cavalry!"
    },
    {
      number: "3",
      color: "bg-green-500",
      icon: "👥",
      title: "Select Squad Size",
      description: "How many boys do you need for backup?"
    },
    {
      number: "4",
      color: "bg-pink-500",
      icon: "⚔️",
      title: "Choose Weapons",
      description: "Pick from our collection of foam swords!"
    }
  ];

  return (
    <motion.section
      id="features"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
      className="max-w-7xl mx-auto px-4 py-16"
    >
      {/* Section heading */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="text-center mb-16"
      >
        <motion.h2
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
          className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2"
        >
          How It Works <span>🤓</span>
        </motion.h2>
      </motion.div>

      {/* Steps grid */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            className="flex flex-col items-center text-center"
          >
            {/* Step circle with number */}
            <motion.div
              variants={fadeIn("down", 0.4 * (index + 1))}
              className={`${step.color} w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl font-bold mb-6 shadow-lg`}
            >
              {step.number}
            </motion.div>

            {/* Title + description */}
            <motion.h3
              variants={textVariant(0.3)}
              className="text-xl font-semibold mb-2 flex items-center gap-2"
            >
              <span>{step.icon}</span> {step.title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.5 * (index + 1))}
              className="text-gray-600"
            >
              {step.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
