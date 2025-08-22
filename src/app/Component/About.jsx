"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">CarHub</span>
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            CarHub is your ultimate destination for discovering, comparing, and managing the finest cars.
            From luxury to electric vehicles, we make your car shopping smarter and faster.
          </p>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Join thousands of happy users who trust CarHub for their automotive journey.
          </p>
         
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://i.ibb.co.com/RGGvm60N/close-up-red-luxury-car-on-black-background-with-copy-space-photo.jpg"
            alt="Car"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-8 left-1/4 bg-white shadow-2xl rounded-2xl px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-blue-600">1000+ Cars</h3>
            <p className="text-gray-500 text-sm">Available in our hub</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
