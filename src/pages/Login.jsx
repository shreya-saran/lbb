import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // import Navbar

const Login = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((u) => u.phone === mobile);

    if (!userExists) {
      alert("No account found with this number. Please sign up.");
      return;
    }

    alert("OTP sent! (Use 1234 for demo)");
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp === "1234") {
      localStorage.setItem("loggedInUser", mobile);
      alert("Login successful!");
      navigate("/booking");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <>
      <Navbar /> {/* Add Navbar */}

      <motion.div
        className="min-h-screen flex items-start justify-center bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 pt-28 md:pt-32"
        initial="hidden"
        animate="show"
        variants={fadeIn("up", 0.3)}
      >
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login with Mobile</h2>
          
          {step === 1 && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600">
                Send OTP
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 border rounded-lg"
                required
              />
              <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
                Verify OTP & Login
              </button>
              <button type="button" onClick={() => setStep(1)} className="w-full text-sm text-gray-500 mt-2">
                Edit Mobile Number
              </button>
            </form>
          )}

          <p className="text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-500 font-medium">Signup</Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
