import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import heroImage from '../../assets/hero-img.png'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="flex flex-col md:flex-row justify-between items-center 
                 px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto
                 bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600 text-white"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
          {/* Star badge */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md 
                          w-fit px-4 py-2 rounded-full cursor-pointer group hover:bg-white/30 transition">
            <span className=" group-hover:scale-110 transition-transform">💪</span>
            <span className="text-sm font-medium">Launde Bula Lo</span>
          </div>
        </motion.div>

        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          <span className="text-yellow-300 relative inline-block">
            Don’t Stress. Launde Hain Na!
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-200/60"></span>
          </span>{' '}
          Professional, reliable, and efficient
        </motion.h1>

        <motion.p 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-white/90 text-lg md:text-xl max-w-xl"
        >
          From Odd Jobs to Big Tasks - Launde are ready to rescue you
        </motion.p>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <button className="bg-yellow-400 text-purple-900 font-semibold px-8 py-4 rounded-xl 
                             hover:bg-yellow-300 cursor-pointer transition-all 
                             hover:shadow-lg hover:shadow-yellow-200 active:scale-95">
            See How It Works
          </button>
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
