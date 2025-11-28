"use client";
import React from "react";
import AboutUs from "@/components/about-us";
import Employee from "@/components/employee";
import Portfolio from "@/components/portfolio";
import Brands from "@/components/brands";
import Services from "@/components/services";

export default function CompanyProfile() {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-20 mt-5 py-2">
        {/* ================================ TOP BANNER ================================ */}
        <div
          className="
            w-full 
            max-w-[850px] h-[200px] sm:h-[240px] md:h-[380px]
            mx-auto overflow-hidden rounded-2xl mb-6 
            bg-center bg-cover
          "
          style={{ backgroundImage: "url('/logo.jpeg')" }}
        />

        {/* ================================ HEADER SECTION ================================ */}
        <div className="relative bg-white py-10 md:py-16 mb-10">
          {/* LEFT RED STRIP */}
          <div className="absolute left-0 top-0 h-full w-2 sm:w-3 md:w-5 bg-red-600"></div>

          {/* TEXT CONTENT */}
          <div className="pl-6 sm:pl-10 md:pl-16">
            <h1 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              INFINITY <br /> ENGINEERINGS
            </h1>

            <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-blue-900 mt-4">
              Company Profile
            </h2>

            <p className="mt-4 text-red-600 text-sm sm:text-base md:text-lg font-medium">
              Proven expertise | Robust installations | End-to-end support
            </p>
          </div>
        </div>

        {/* ================================ PAGE SECTIONS ================================ */}
        <AboutUs />
        <Employee />
        <Portfolio />
        <Brands />
        <Services />
      </div>
    </div>
  );
}
