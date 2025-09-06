import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { fadeIn } from "../utils/motion";

const ConfirmationPage = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("bookingData");
    if (data) setBooking(JSON.parse(data));
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
        {/* spacer for fixed navbar */}
        <div className="pt-28 md:pt-32" />

        <motion.div
          variants={fadeIn("up", 0.15)}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto px-6 pb-20"
        >
          {!booking ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                No booking found 😅
              </h2>
              <p className="text-gray-600 mt-2">Please create a booking first.</p>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 border border-white">
              <h1 className="text-3xl md:text-4xl font-extrabold text-orange-400 text-center">
                Booking Confirmed!
              </h1>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl border bg-white shadow-sm">
                  <p className="text-xs text-gray-500">Fight Location Type</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {booking.fightType}
                  </p>
                </div>
                <div className="p-4 rounded-xl border bg-white shadow-sm">
                  <p className="text-xs text-gray-500">Exact Location</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {booking.location}
                  </p>
                </div>
                <div className="p-4 rounded-xl border bg-white shadow-sm">
                  <p className="text-xs text-gray-500">Squad Size</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {booking.boys} Boys
                  </p>
                </div>
                <div className="p-4 rounded-xl border bg-white shadow-sm">
                  <p className="text-xs text-gray-500">Weapons (Props)</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {booking.weapons?.length ? booking.weapons.join(", ") : "None"}
                  </p>
                </div>
              </div>

              

              <div className="mt-8 flex justify-center gap-3">
                <a
                  href="/booking"
                  className="px-5 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 shadow"
                >
                  Make Another Booking
                </a>
                <a
                  href="/"
                  className="px-5 py-2 rounded-lg border bg-white hover:bg-gray-50 shadow"
                >
                  Back to Home
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </>
  );
};

export default ConfirmationPage;
