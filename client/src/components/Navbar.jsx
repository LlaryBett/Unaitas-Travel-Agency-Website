import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 border-b ${
        isScrolled || !isHome
          ? "bg-white shadow-md border-gray-300"
          : "bg-transparent border-gray-100"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-6">
        {/* Logo */}
        <a
          href="/"
          className={`text-4xl font-extrabold transition-all duration-300 ${
            isScrolled || !isHome ? "text-blue-600" : "text-white"
          }`}
        >
          Unaitas
        </a>
{/* Mobile Menu Button */}
<button
  onClick={toggleMenu}
  className="md:hidden p-3 text-white hover:bg-gray-200 rounded-lg transition-all"
  aria-label="Toggle Menu"
>
  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="white" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
</button>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-xl font-semibold">
          <ScrollLink
            to="home"
            smooth={true}
            duration={700}
            offset={-70}
            className={`cursor-pointer transition-all ${
              isScrolled || !isHome
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="destinations"
            smooth={true}
            duration={700}
            offset={-70}
            className={`cursor-pointer transition-all ${
              isScrolled || !isHome
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Destinations
          </ScrollLink>

          <ScrollLink
            to="gallery-section"
            smooth={true}
            duration={700}
            offset={-70}
            className={`cursor-pointer transition-all ${
              isScrolled || !isHome
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Gallery
          </ScrollLink>

          <ScrollLink
            to="packages"
            smooth={true}
            duration={700}
            offset={-70}
            className={`cursor-pointer transition-all ${
              isScrolled || !isHome
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Packages
          </ScrollLink>

          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={700}
            offset={-70}
            className={`cursor-pointer transition-all ${
              isScrolled || !isHome
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            Contact
          </ScrollLink>

          {/* CTA Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Sliding Menu) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

<motion.div
  initial={{ x: "-100%" }}
  animate={{ x: isOpen ? "0%" : "-100%" }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col"
>
  {/* Close Button */}
  <button onClick={closeMenu} className="absolute top-4 right-4">
    <X size={28} className="text-gray-700" />
  </button>

  {/* Sidebar Navigation Links with Borders */}
  <nav className="mt-10 text-lg font-medium">
    <ScrollLink
      to="home"
      smooth={true}
      duration={700}
      offset={-70}
      className="block text-gray-700 py-3 hover:text-blue-600 border-b border-gray-300"
      onClick={closeMenu}
    >
      Home
    </ScrollLink>

    <ScrollLink
      to="destinations"
      smooth={true}
      duration={700}
      offset={-70}
      className="block text-gray-700 py-3 hover:text-blue-600 border-b border-gray-300"
      onClick={closeMenu}
    >
      Destinations
    </ScrollLink>

    <ScrollLink
      to="gallery-section"
      smooth={true}
      duration={700}
      offset={-70}
      className="block text-gray-700 py-3 hover:text-blue-600 border-b border-gray-300"
      onClick={closeMenu}
    >
      Gallery
    </ScrollLink>

    <ScrollLink
      to="packages"
      smooth={true}
      duration={700}
      offset={-70}
      className="block text-gray-700 py-3 hover:text-blue-600 border-b border-gray-300"
      onClick={closeMenu}
    >
      Packages
    </ScrollLink>

    <ScrollLink
      to="contact-section"
      smooth={true}
      duration={700}
      offset={-70}
      className="block text-gray-700 py-3 hover:text-blue-600 border-b border-gray-300"
      onClick={closeMenu}
    >
      Contact
    </ScrollLink>

    {/* CTA Button with Border on Top for Separation */}
    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all mt-4 border-t border-gray-300">
      Book Now
    </button>
  </nav>
</motion.div>

    </nav>
  );
};

export default Navbar;
