import Image from "next/image";

export default function ProductPortfolio() {
  return (
    <div className="w-full bg-white min-h-screen font-sans">
      {/* Header Section */}
      <div className="w-full py-10 px-6 md:px-16 bg-white relative">
        <Image
          src="/logo.jpeg"
          alt="Infinity Logo"
          width={140}
          height={60}
          className="mb-4"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-red-700 leading-tight">
          Our <br /> Product Portfolio
        </h1>

        <div className="w-20 h-1 bg-red-700 mt-3"></div>
      </div>

      {/* Full Page Layout */}
      <div className="px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Left Image */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/port1.png"
              alt="Product"
              width={700}
              height={500}
              className="rounded shadow"
            />
          </div>

          {/* Two Top Right Images */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
            <Image
              src="/port2.png"
              alt="Product"
              width={500}
              height={300}
              className="rounded shadow"
            />
            <Image
              src="/port3.png"
              alt="Product"
              width={500}
              height={300}
              className="rounded shadow"
            />
          </div>

          {/* Middle Product (Large Door) */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/port5.png"
              alt="Double Door"
              width={900}
              height={600}
              className="rounded shadow"
            />
          </div>

          {/* Small Middle Right Image */}
          <div className="col-span-1">
            <Image
              src="/port4.png"
              alt="Office Light Pattern"
              width={500}
              height={300}
              className="rounded shadow"
            />
          </div>

          {/* Small Middle Right 2 */}
          <div className="col-span-1">
            <Image
              src="/port4.png"
              alt="Office Glass Area"
              width={500}
              height={300}
              className="rounded shadow"
            />
          </div>

          {/* Fireproof Glass */}
          <div className="col-span-1">
            <Image
              src="/port7.png"
              alt="Fire Glass"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>

          {/* Bottom Right Door Image */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/port6.png"
              alt="Door"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
