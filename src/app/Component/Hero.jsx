"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/cars"); // এখানে আপনার cars পেজের path দিন
  };

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
          alt="Car background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Discover Your <span className="text-red-500">Dream Car</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Explore the latest models, compare prices, and find your perfect ride with{" "}
          <span className="font-semibold text-white">Car Hub</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="flex justify-center gap-4"
        >
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </motion.div>
      </div>

      {/* Decorative circle effect */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
}
