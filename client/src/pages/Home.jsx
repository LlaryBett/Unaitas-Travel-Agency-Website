import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroBanner from "../assets/hero-banner.jpg";
import SearchSection from "../components/SearchSection";
import Destinations from "./Destinations";
import Packages from "./Packages"; // ✅ Import Packages component
import Footer from "../components/Footer"; // ✅ Import Footer component
import Gallery from "./Gallery"; // ✅ Import Gallery component
import Contact from "./Contact"; // ✅ Import Contact Page

const Home = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section
                id="home"
                className="relative w-full overflow-hidden"
                style={{
                    height: 'calc(100vh + 100px)', // Adjusted for small screens
                }}
            >
                {/* Background Image Container */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: `url(${HeroBanner})`,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content Container */}
                <div className="relative h-screen">
                    <Navbar />

                    {/* Hero Content */}
                    <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
                        {/* Animated Heading */}
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-8xl font-bold"
                            initial={{ opacity: 0, y: 50 }} // Start hidden
                            whileInView={{ opacity: 1, y: 0 }} // Animate when visible
                            viewport={{ once: false, amount: 0.3 }} // Replay when 30% of it is in view
                            transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
                        >
                            Journey to <br /> explore the world
                        </motion.h1>

                        {/* Animated Paragraph */}
                        <motion.p
                            className="mt-4 text-lg md:text-xl lg:text-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Delay to sync with heading
                        >
                            At Unaitas, we believe every journey should be unforgettable. 🌍✨ We are <br />
                            dedicated to crafting seamless and personalized travel experiences, <br />
                            helping you explore breathtaking destinations with ease.
                        </motion.p>

                        {/* Animated Buttons */}
                        <motion.div
                            className="mt-6 flex space-x-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        >
                            <a href="/about" className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg">
                                Learn More
                            </a>
                            <a href="/book" className="px-8 py-3 text-lg border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-full shadow-lg transition-all">
                                Book Now
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Below Hero */}
            <div className="relative bg-white">
                {/* Search Section - Full Width */}
                <div id="search" className="w-full px-4 md:px-0">
                    <SearchSection />
                </div>

                {/* Destinations Section - Full Width */}
                <div id="destinations" className="w-full px-4 md:px-0">
                    <Destinations />
                </div>

                {/* Gallery Section - Added Below Packages */}
                <div id="gallery-section" className="w-full px-4 md:px-0">
                    <Gallery />
                </div>

                {/* Packages Section */}
                <div id="packages" className="w-full px-4 md:px-0">
                    <Packages />
                </div>

                {/* Contact Us Section Below Packages */}
                <div id="contact" className="w-full px-4 md:px-0">
                    <Contact />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
