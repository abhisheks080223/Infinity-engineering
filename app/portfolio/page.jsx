
import React from "react";

export default function ProductPortfolio() {
  return (
    <div className="w-full bg-[#f5f5f5] pb-16">
      {/* ---------- TOP HEADER WITH RED BAR ---------- */}
      <div className="relative w-full bg-white">
        <div className="flex">
          {/* Left Red Bar */}
          <div className="bg-red-700 w-6 sm:w-10 md:w-16 h-full"></div>

          {/* Title Section */}
          <div className="pl-6 py-10">
            <h1 className="text-4xl md:text-5xl font-bold text-red-700 leading-tight">
              Our <br /> Product Portfolio
            </h1>

            {/* Red underline */}
            <div className="w-20 h-1 bg-red-700 mt-3"></div>
          </div>
        </div>
      </div>

      {/* ---------- PRODUCT IMAGE GRID ---------- */}
      <div className="px-6 md:px-16 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Top Left Big Image */}
          <img
            src="/portfolio/p1.png"
            className="rounded-lg shadow-md w-full object-cover"
            alt=""
          />

          {/* Top Right Big Image */}
          <img
            src="/portfolio/p2.png"
            className="rounded-lg shadow-md w-full object-cover"
            alt=""
          />

          {/* Middle Large Door Image */}
          <img
            src="/portfolio/p3.png"
            className="rounded-lg shadow-md w-full object-cover sm:col-span-2 lg:col-span-1"
            alt=""
          />

          {/* Small Images Row */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/portfolio/p4.png"
              className="rounded-lg shadow-md w-full object-cover"
              alt=""
            />
            <img
              src="/portfolio/p5.png"
              className="rounded-lg shadow-md w-full object-cover"
              alt=""
            />
          </div>

          {/* Small Red Rectangle (as shown in your design) */}
          <div className="w-full h-full bg-red-700 rounded-md"></div>

          {/* Right Door Image */}
          <img
            src="/portfolio/p6.png"
            className="rounded-lg shadow-md w-full object-cover"
            alt=""
          />

          {/* Bottom Fire Glass Image */}
          <img
            src="/portfolio/p7.png"
            className="rounded-lg shadow-md w-full object-cover sm:col-span-2"
            alt=""
          />

        </div>
      </div>
    </div>
  );
}
