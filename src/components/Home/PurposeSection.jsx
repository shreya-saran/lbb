import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Boys deployed in under 5 minutes! Faster than pizza delivery! 🍕",
      bg: "bg-orange-100"
    },
    {
      icon: "🛡️",
      title: "100% Safe",
      description: "Certified in dramatic poses and epic one-liners! 😎",
      bg: "bg-purple-100"
    },
    {
      icon: "👥",
      title: "Squad Goals",
      description: "Choose from 1–50 boys. We've got the numbers! 📊",
      bg: "bg-green-100"
    },
    {
      icon: "⭐",
      title: "5-Star Rated",
      description: "Our boys have mastered the art of dramatic entrances! 🎭",
      bg: "bg-pink-100"
    }
  ];

  return (
    <section 
      id="about" 
      className="w-full bg-gradient-to-r from-orange-50 via-rose-50 to-pink-50 py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Choose Us?
        </motion.h2>
      </div>

      {/* Features grid */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // 👈 re-triggers on scroll
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2 * (index + 1))}
            className={`${feature.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center`}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PurposeSection;
