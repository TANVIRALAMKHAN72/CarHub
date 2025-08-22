"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("Data is not array:", data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );

  if (!Array.isArray(cars) || cars.length === 0) {
    return <p className="text-center mt-10 text-red-500">No cars found.</p>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center my-12">Cars Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map(car => (
          <div
            key={car._id}
            className="border rounded-lg shadow-xl p-4 hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
            <p className="text-gray-600 mb-1">Brand: {car.brand}</p>
            <p className="text-gray-800 font-bold">Price: ${car.price}</p>

            {/* Details Button */}
            <Link href={`/cars/${car._id}`}>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
