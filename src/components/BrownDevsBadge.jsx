import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import brownLogo from "../assets/LOGO.jpeg";
 

const BrownDevsBadge = () => {
  const [isOpen, setIsOpen] = useState(false);


  // Auto-open modal after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);


    try {
      await addDoc(collection(db, "brownDevsLeads"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      alert("✅ Thanks! Your form has been submitted.");
      setIsOpen(false);
      e.target.reset();
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      alert("❌ Failed to submit. Try again later.");
    }
  };


  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Badge */}
      <motion.button
  onClick={() => setIsOpen(true)}
  whileHover={{ scale: 1.1 }}
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-500
             text-white px-4 py-2 rounded-full shadow-lg transition relative overflow-hidden"
>
  {/* Glow Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-300 to-yellow-500 opacity-30 blur-xl rounded-full animate-pulse"></span>


  {/* ✨ Glitter */}
  <span className="pointer-events-none absolute inset-0">
    {[...Array(8)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      />
    ))}
  </span>


  <img src={brownLogo} alt="Brown Devs" className="h-6 w-auto relative z-10" />
  <span className="text-sm font-semibold relative z-10 text-gray-900">
  Developed by <b>Brown Devs</b>
</span>


</motion.button>






      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>


              {/* Heading */}
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-500
 bg-clip-text text-transparent">
                🚀 Work with Brown Devs
              </h2>
              <p className="text-gray-600 mb-6">
                Want an App or Website for your business? Fill this form and we’ll get back to you!
              </p>


              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <select
                  name="projectType"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="website">Website</option>
                  <option value="app">Mobile App</option>
                  <option value="both">Both Website & App</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows="3"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>


                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-purple-600 to-pink-600
                             text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default BrownDevsBadge;



