import React from "react";

export default function CompanyProfile() {
  return (
    <div className="w-full min-h-screen bg-white font-sans relative">
      {/* Top Banner */}
      <div
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Screenshot-2025-11-26-160933.png')",
        }}
      >
        {/* Top Buttons */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          <button className="bg-white/80 backdrop-blur text-blue-900 py-2 px-4 rounded-lg font-semibold shadow hover:bg-blue-200 transition">About Us</button>
          <button className="bg-white/80 backdrop-blur text-blue-900 py-2 px-4 rounded-lg font-semibold shadow hover:bg-blue-200 transition">Portfolio</button>
          <button className="bg-white/80 backdrop-blur text-blue-900 py-2 px-4 rounded-lg font-semibold shadow hover:bg-blue-200 transition">Services</button>
          <button className="bg-white/80 backdrop-blur text-blue-900 py-2 px-4 rounded-lg font-semibold shadow hover:bg-blue-200 transition">Clients</button>
                   <button className="bg-white/80 text-blue-900 py-3 px-5 rounded-xl font-semibold shadow-md hover:bg-blue-200 transition">Products</button>
                          <button className="bg-white/80 text-blue-900 py-3 px-5 rounded-xl font-semibold shadow-md hover:bg-blue-200 transition">Company Heads & Employees</button>
        </div>

        {/* Logo Overlay */} */
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <img
            src="/logo.jpeg"
            alt="Infinity Logo"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="relative bg-white px-12 py-14">
        {/* Red Left Corner Bar */}
        <div className="absolute left-0 top-0 h-full w-6 bg-red-600"></div>

        <h1 className="text-red-600 text-5xl font-extrabold leading-tight tracking-wide">
          INFINITY <br /> ENGINEERINGS
        </h1>

        <h2 className="text-2xl font-semibold text-blue-900 mt-4">Company Profile</h2>

        <p className="mt-4 text-red-600 font-medium text-lg">
          Proven expertise | Robust installations | End-to-end support
        </p>

        <div className="mt-12 text-right text-base text-gray-700">
          www.infinityengineerings.com
        </div>

        <div className="text-right text-red-600 font-bold text-xl pr-1">01</div>
      </div>
    </div>
  );
}
