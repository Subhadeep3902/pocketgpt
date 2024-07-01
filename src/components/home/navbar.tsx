"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-gray-900 text-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-semibold cursor-pointer">
            Pocket GPT
          </span>
          <div className="hidden md:flex space-x-4">
            <Link
              href="#"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="#chatbots"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Chatbots
            </Link>
            <Link
              href="#pricing"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link
              href="#"
              className="block px-4 py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#chatbots"
              className="block px-4 py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Chatbots
            </Link>
            <Link
              href="#pricing"
              className="block px-4 py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 hover:text-blue-500 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
