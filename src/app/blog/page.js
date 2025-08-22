"use client";
import Link from "next/link";

// Static JSON data
const blogPosts = [
 {
    id: 1,
    title: "Top 5 Electric Cars of 2025",
    date: "August 20, 2025",
    excerpt: "Discover the most innovative and eco-friendly electric cars hitting the roads this year.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Car for You",
    date: "August 15, 2025",
    excerpt: "A complete guide to help you select the ideal car based on your needs and lifestyle.",
  },
  {
    id: 3,
    title: "Car Maintenance Tips Every Owner Should Know",
    date: "August 10, 2025",
    excerpt: "Keep your car running smoothly with these essential maintenance tips.",
  },
  {
    id: 4,
    title: "The Future of Autonomous Vehicles",
    date: "August 5, 2025",
    excerpt: "Explore how self-driving cars are shaping the future of transportation.",
  },
  {
    id: 5,
    title: "Top Affordable Cars in 2025",
    date: "August 1, 2025",
    excerpt: "Check out the best budget-friendly cars offering great value for money.",
  },
  {
    id: 6,
    title: "How to Improve Your Car’s Fuel Efficiency",
    date: "July 28, 2025",
    excerpt: "Simple tips and tricks to get more mileage out of your vehicle.",
  },
];

export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-16 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        CarHub <span className="text-blue-600">Blog</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link href="#" className="text-blue-600 font-medium hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
