
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navMenu = () => (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/cars"}>Cars</Link>
      </li>
      <li>
        <Link href={"/add-car"}>Add Car</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu()}
          </ul>
        </div>

        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/images-removebg-preview.png"}
            alt="Logo"
            width={100}
            height={100}
          />
          <span className="font-bold text-xl">Car Hub</span>
        </Link>
      </div>

      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
       <Link href="/login" className="btn btn-outline btn-primary">
  Login
</Link>
      </div>
    </div>
  );
}
