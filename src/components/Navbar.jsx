import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); 
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "Features" },
    { href: "/#features", label: "How It Works" },
  ];

  useEffect(() => {
    const loggedInUserPhone = localStorage.getItem("loggedInUser");
    if (loggedInUserPhone) {
      setIsLoggedIn(true);

      // find user from stored list
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.phone === loggedInUserPhone);

      if (user) {
        setUserName(user.name.split(" ")[0]); 
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  const handleBookNow = () => {
    if (isLoggedIn) {
      navigate("/booking");
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        {/* Logo */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={logo} alt="Logo" className="h-18 w-auto object-contain" />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn("down", 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink("")}
              className={`text-base font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-orange-600 after:transition-all
                ${
                  activeLink === link.href
                    ? "text-orange-600 after:w-full"
                    : "text-gray-700 hover:text-orange-600"
                }`}
            >
              {link.label}
            </motion.a>
          ))}

          {/* Book Now */}
          <button
            onClick={handleBookNow}
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg shadow hover:opacity-90 transition"
          >
            Book Now
          </button>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition"
              >
                Login
              </Link>
              {/* <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Signup
              </Link> */}
            </>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">
                Hi, <span className="text-orange-600">{userName}</span> 👋
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          )}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="h-7 w-7" /> : <HiMenu className="h-7 w-7" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4 shadow"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-6 space-y-3"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-base font-medium py-2
                  ${
                    activeLink === link.href
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Mobile Book Now */}
            <button
              onClick={() => {
                handleBookNow();
                setIsMenuOpen(false);
              }}
              className="block w-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg shadow hover:opacity-90 transition"
            >
              Book Now
            </button>

            {/* Mobile Greeting / Auth */}
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition"
                >
                  Login
                </Link>
                {/* <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                >
                  Signup
                </Link> */}
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <span className="block text-gray-700 font-medium">
                  Hi, <span className="text-orange-600">{userName}</span> 👋
                </span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
