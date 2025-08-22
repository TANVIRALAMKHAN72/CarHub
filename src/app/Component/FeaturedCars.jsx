"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FeaturedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://carhub-server-odm9n006p-tanvir-alam-khans-projects.vercel.app/cars")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data.slice(0, 6)); 
        } else {
          console.error("Data is not array:", data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-60">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  if (!Array.isArray(cars) || cars.length === 0)
    return <p className="text-center mt-10 text-red-500">No cars found.</p>;

  return (
    <section className="container mx-auto px-5 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Featured Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car._id}
            className="border rounded-lg shadow-xl p-4 hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={car.image || "/placeholder.png"}
                alt={car.name || "Car Image"}
                fill
                className="object-cover rounded-md transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{car.name}</h3>
            <p className="text-gray-600 mb-1">Brand: {car.brand}</p>
            <p className="text-gray-800 font-bold">Price: ${car.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => router.push("/cars")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          See All
        </button>
      </div>
    </section>
  );
}
