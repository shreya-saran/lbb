import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fadeIn } from "../utils/motion";

const stepsTotal = 4;

const BookingForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fightType: "",
    location: "",
    boys: "",
    weapons: [],
  });

  const fightTypes = useMemo(() => ["College", "School", "Office", "Public Place"], []);
  const boyOptions = useMemo(() => [2, 5, 10, 20, 50], []);
  const weaponOptions = useMemo(() => ["Danda", "Rod", "Hockey", "Bat", "Stumps"], []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const validateStep = () => {
    const e = {};
    if (step === 1 && !formData.fightType) e.fightType = "Select where the fight happened.";
    if (step === 2 && !formData.location.trim()) e.location = "Please enter the exact location.";
    if (step === 3 && !formData.boys) e.boys = "Please choose the squad size.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleWeaponToggle = (weapon) => {
    setFormData((prev) => {
      const already = prev.weapons.includes(weapon);
      const weapons = already ? prev.weapons.filter((w) => w !== weapon) : [...prev.weapons, weapon];
      return { ...prev, weapons };
    });
  };

  // Fix: prevent form submit when clicking Next button
  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) setStep((s) => Math.min(stepsTotal, s + 1));
  };

  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  // Prevent Enter key submitting before last step
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (step < stepsTotal) {
        e.preventDefault();
        handleNext(e);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === stepsTotal) {
      localStorage.setItem("bookingData", JSON.stringify(formData));
      navigate("/confirmation");
    }
  };

  const progressPct = ((step - 1) / (stepsTotal - 1)) * 100;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
        <div className="pt-28 md:pt-32" />
        <motion.div variants={fadeIn("up", 0.15)} initial="hidden" animate="show" className="max-w-3xl mx-auto px-6 pb-20">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Book Your Boys 💪</h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Step-by-step: Location Type → Exact Location → Squad Size → Weapons → Confirm
            </p>
          </div>
          {/* Progress Bar */}
          <div className="relative h-2 rounded-full bg-gray-200 overflow-hidden mb-8">
            <motion.div
              key={step}
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="h-full bg-gradient-to-r from-orange-500 to-pink-500"
            />
          </div>
          {/* Step Pills */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition ${
                    step >= n ? "bg-orange-500 text-white" : "bg-white border text-gray-700"
                  }`}
                >
                  {n}
                </div>
                <span className="text-[11px] md:text-xs text-gray-600">{["Type", "Location", "Squad", "Weapons"][n - 1]}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 border border-white min-h-[300px]">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Fight Location Type</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {fightTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => handleChange("fightType", type)}
                          className={`p-4 rounded-xl border text-sm font-medium shadow-sm hover:shadow-md transition ${
                            formData.fightType === type ? "bg-orange-100 border-orange-500" : "bg-white"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    {errors.fightType && <p className="text-sm text-red-600">{errors.fightType}</p>}
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Enter Exact Location</h2>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                      placeholder="Street, Area, City, Landmark"
                      className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                      autoFocus
                    />
                    {errors.location && <p className="text-sm text-red-600">{errors.location}</p>}
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Select Squad Size</h2>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                      {boyOptions.map((num) => (
                        <button
                          type="button"
                          key={num}
                          onClick={() => handleChange("boys", num)}
                          className={`p-4 rounded-xl border text-sm font-semibold shadow-sm hover:shadow-md transition ${
                            formData.boys === num ? "bg-orange-100 border-orange-500" : "bg-white"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    {errors.boys && <p className="text-sm text-red-600">{errors.boys}</p>}
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      Choose Weapons 
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {weaponOptions.map((weapon) => (
                        <button
                          type="button"
                          key={weapon}
                          onClick={() => handleWeaponToggle(weapon)}
                          className={`p-4 rounded-xl border text-sm font-medium shadow-sm hover:shadow-md transition ${
                            formData.weapons.includes(weapon) ? "bg-orange-100 border-orange-500" : "bg-white"
                          }`}
                        >
                          {weapon}
                        </button>
                      ))}
                    </div>
                    {/* <p className="text-xs text-gray-500">
                      *Parody app — real violence is not encouraged. Selected items represent harmless props only.
                    </p> */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => handleBack()}
                  className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Back
                </button>
              ) : (
                <span />
              )}
              {step < stepsTotal ? (
                <button
                  type="button"
                  onClick={(e) => handleNext(e)}
                  className="px-6 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 shadow"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 shadow"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </main>
    </>
  );
};

export default BookingForm;
