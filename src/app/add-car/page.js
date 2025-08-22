"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    year: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.brand || !formData.price) {
      alert("Please fill all required fields!");
      return;
    }

    try {
     const res = await fetch("https://carhub-server-odm9n006p-tanvir-alam-khans-projects.vercel.app/cars", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      if (res.ok) {
        alert("✅ Product added successfully!");
        setFormData({
          name: "",
          brand: "",
          year: "",
          price: "",
          description: "",
          image: "",
        });
      } else {
        alert("❌ Failed to add product!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Add New Car
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='e.g. '
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder='e.g. '
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="e.g. "
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder='e.g. '
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short description about the product..."
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Product
        </button>
      </form>
    </div>
  );
}
