"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";

export default function CompanyProfile() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About Us", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Services", link: "/services" },
    { name: "Clients", link: "/clients" },
    { name: "Products", link: "/products" },
    { name: "Company Heads & Employees", link: "/employee" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans relative">
      {/* ================================
          TOP BANNER (FULL LOGO)
      =================================*/}

      <div className="relative w-full h-[40vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        {/* FULLSCREEN LOGO / BANNER */}
        <img
          src="/logo.jpeg"
          alt="Infinity Logo"
          className="w-full h-full object-cover opacity-90"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden absolute top-4 left-6 z-30">
          <button
            onClick={() => setOpen(!open)}
            className="bg-white/80 p-2 rounded-md shadow-md"
          >
            {open ? <HiMiniXMark size={15} /> : <HiMiniBars3 size={15} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 gap-4 z-30">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-white/80 backdrop-blur text-blue-900 py-2 px-4 rounded-lg font-semibold 
                   shadow hover:bg-blue-200 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-16 left-6 right-6 bg-white/95 rounded-xl shadow-xl p-2 z-20 animate-slide-down">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
                className="block text-blue-900 text-lg font-semibold py-2 px-3 rounded hover:bg-blue-200 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ================================
          BOTTOM WHITE SECTION
      =================================*/}
      <div className="relative bg-white px-6 md:px-12 py-12 md:py-16">
        {/* Red Left Stripe */}
        <div className="absolute left-0 top-0 h-full w-3 md:w-6 bg-red-600"></div>

        <h1 className="text-red-600 text-4xl md:text-5xl font-extrabold leading-tight">
          INFINITY <br /> ENGINEERINGS
        </h1>

        <h2 className="text-lg md:text-2xl font-semibold text-blue-900 mt-4">
          Company Profile
        </h2>

        <p className="mt-4 text-red-600 text-base md:text-lg font-medium">
          Proven expertise | Robust installations | End-to-end support
        </p>

        <div className="mt-10 text-right text-gray-700 text-sm md:text-base">
          www.infinityengineerings.com
        </div>

        <div className="text-right text-red-600 font-bold text-lg md:text-xl pr-1">
          01
        </div>
      </div>
    </div>
  );
}
