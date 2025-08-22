"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Car Enthusiast",
    message: "Best platform to find my dream car! Amazing collection and super easy to use.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Professional Driver",
    message: "CarHub made car shopping so easy. Loved the interface and features.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Automotive Blogger",
    message: "Highly recommend CarHub! A perfect hub for all car lovers.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        What our <span className="text-blue-600">Customers</span> Say
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 mb-4">&quot;{t.message}&quot;</p>
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <span className="text-gray-500 text-sm">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
