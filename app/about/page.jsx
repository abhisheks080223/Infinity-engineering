export default function AboutUsPage() {
    return (
        <>
            <div className="w-full bg-white font-sans">
                {/* Header Section */}
<div
    className="w-full relative flex items-center justify-center 
               bg-cover bg-center h-[28vh] md:h-[60vh]"
    style={{
        backgroundImage: "url('/aboutus.jpeg')"
    }}
>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Optional Logo or Text in Center */}
    {/* <img
        src="/Screenshot-2025-11-27-053043.png"
        alt="Infinity Logo"
        className="relative z-10 w-40 md:w-72 opacity-90"
    /> */}
</div> 


                {/* Main Content */}
                <div className="relative px-4 md:px-12 py-10 md:py-20 max-w-5xl mx-auto">
                    <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">ABOUT US</h3>

                    <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-10">
                        <span className="font-bold">INFINITY ENGINEERINGS</span>, a leading distributor
                        of innovative building solutions since 2021, ensures safety, sustainability,
                        and functionality in construction. We are a trusted partner for architects and
                        builders in India, serving as the authorized distributor for
                        <span className="font-semibold"> Coopers Fire Ltd.</span> for Fire and Smoke
                        Curtains across India. We also partner with
                        <span className="font-semibold"> Panasonic & Havells LED Lighting</span> for
                        pan-India operations and distribute
                        <span className="font-semibold"> Dormakaba's premium hardware solutions</span>
                        in North India.
                    </p>

                    <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">OUR VISION</h3>
                    <p className="text-gray-800 leading-relaxed text-base md:text-lg mb-10">
                        We put safety first by creating quality products that protect people and
                        buildings. Our eco-friendly solutions are designed to meet specific needs while
                        caring for the environment.
                    </p>

                    <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">OUR MISSION</h3>
                    <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                        At Infinity Engineerings, our mission is to provide cutting-edge building
                        solutions that prioritize safety, energy efficiency, and aesthetic appeal.
                        We strive to build long-term relationships with our clients, delivering
                        exceptional service and support.
                    </p>
                </div>
            </div>

            {/* INTRODUCTION SECTION */}
            <div className="w-full bg-white font-sans">
                {/* Top Section */}
                <div className="px-4 md:px-10 pt-10 md:pt-12 max-w-6xl mx-auto">
                    <h1 className="text-red-600 text-3xl md:text-5xl font-extrabold leading-tight">
                        INTRODUCTION
                    </h1>
                    <h2 className="text-blue-900 text-2xl md:text-4xl font-extrabold mt-2">
                        ABOUT OUR COMPANY
                    </h2>

                    <div className="w-full h-[2px] bg-blue-900 mt-4" />

                    {/* Intro Text */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left Quote */}
                        <div>
                            <p className="text-red-600 italic font-semibold text-lg md:text-xl leading-relaxed">
                                “WE ENGINEER ADVANCED SOLUTIONS TO PROTECT LIVES, PROPERTY,
                                AND INFRASTRUCTURE THROUGH CERTIFIED TECHNOLOGY AND EXCELLENCE.”
                            </p>
                        </div>

                        {/* Right Paragraph */}
                        <div className="text-gray-800 leading-relaxed text-base md:text-lg">
                            <p>
                                At <span className="font-semibold">Infinity Engineerings</span>,
                                our mission is to set new benchmarks in fire and smoke protection.
                                We engineer solutions that safeguard lives, property, and critical
                                infrastructure through cutting-edge technology, certified products,
                                and a commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Large Image */}
                <div className="mt-8">
                    <img
                        src="/intro.jpeg"
                        alt="Infinity Logo"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Bottom Product Columns */}
                <div className="px-4 md:px-10 py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Red What We Offer Box */}
                    <div className="bg-red-700 text-white px-6 md:px-8 py-8 md:py-10 shadow-lg rounded-lg">
                        <h3 className="text-2xl md:text-3xl font-bold">WHAT WE OFFER?</h3>

                        <div className="mt-6">
                            <h4 className="text-xl md:text-2xl font-semibold">
                                FIRE & SMOKE PROTECTION
                            </h4>
                            <p className="mt-3 text-sm md:text-base leading-relaxed">
                                Expertly engineered curtains and barriers for escape routes,
                                property boundaries, and compartmentation across offices, malls,
                                residential towers, and industrial complexes.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-xl md:text-2xl font-semibold">FIRE RATED DOOR</h4>
                            <p className="mt-3 text-sm md:text-base leading-relaxed">
                                We provide wooden and metal fire doors, glazed partitions,
                                acoustic solutions, clean room doors, and architectural systems—
                                all compliant with building regulations.
                            </p>
                        </div>
                    </div>

                    {/* Right Column Items */}
                    <div className="space-y-10">
                        {/* Fire Resistant Glass */}
                        <div>
                            <h4 className="text-red-700 text-xl md:text-2xl font-bold">
                                ADVANCED FIRE-RESISTANT GLASS
                            </h4>
                            <p className="mt-3 text-gray-800 leading-relaxed text-sm md:text-base">
                                Fire glass stays clear in daily use but becomes a protective barrier
                                during emergencies—ensuring visibility and safety.
                            </p>
                        </div>

                        {/* LED Lightings */}
                        <div>
                            <h4 className="text-red-700 text-xl md:text-2xl font-bold">
                                LED LIGHTINGS
                            </h4>
                            <p className="mt-3 text-gray-800 leading-relaxed text-sm md:text-base">
                                Infinity LED solutions provide energy-efficient, modern lighting
                                for industries, offices, streets, and facades—ensuring premium
                                illumination and safety.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
