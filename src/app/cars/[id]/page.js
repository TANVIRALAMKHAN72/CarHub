"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://carhub-server-odm9n006p-tanvir-alam-khans-projects.vercel.app/cars/${id}`)
      .then(res => res.json())
      .then(data => {
        setCar(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!car) {
    return <p className="text-center mt-10 text-red-500">Car not found.</p>;
  }

  return (
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        <div className="relative w-full lg:w-1/2 h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-2xl">
         <Image
  src={car.image || "/placeholder.png"} 
  alt={car.name || "Car Image"}
  fill
  className="object-cover transition-transform duration-500 hover:scale-105"
/>

        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-900">{car.name}</h1>
          <p className="text-gray-600 text-lg">Brand: <span className="font-semibold">{car.brand}</span></p>
          <p className="text-gray-600 text-lg">Year: <span className="font-semibold">{car.year}</span></p>
          <p className="text-gray-800 text-2xl font-bold">Price: {car.price}</p>
          <p className="mt-4 text-gray-700 text-lg">{car.description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
}
