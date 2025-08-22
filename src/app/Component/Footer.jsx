"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image 
            src={'/images-removebg-preview.png'} 
            alt="CarHub Logo" 
            width={100} 
            height={100} 
            className="object-contain mb-4"
          />
          <p className="text-gray-400 max-w-xs">
            Discover, compare and manage your dream cars all in one place.  
            Join thousands of happy users today!
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <FaFacebookF className="w-6 h-6 hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="w-6 h-6 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} CarHub. All rights reserved.
      </div>
    </footer>
  );
}
