import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import heroImg from "../assets/images/npi4.png";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black fixed top-0 left-0 w-full h-25 z-50 bg-opacity-80 backdrop-blur-md shadow-lg font-poppins">
      <div className="max-w-8xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* === Logo === */}
        <a href="#home">
          <div className="flex items-center ">
            <img
              src={heroImg}
              alt="SwaraCast Logo"
              className="w-10 h-10 md:w-18 md:h-18 object-contain"
            />
            <h3 className="font-bold text-xl mt-4 md:mt-10 text-[#fff] font-serif">
              Voices Of NRI
            </h3>
          </div>
        </a>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex space-x-8 text-lg md:text-xl text-white">
          <a href="#home" className="hover:text-[#E0610C] transition">
            Home
          </a>
          <a href="#radio" className="hover:text-[#E0610C] transition">
            Radio
          </a>
          <a href="#podcast" className="hover:text-[#E0610C] transition">
            Podcast
          </a>
          <a href="#audio-room" className="hover:text-[#E0610C] transition">
            Audio Rooms
          </a>
          {/* <a href="#" className="hover:text-[#E0610C] transition">
            Music
          </a> */}
        </nav>

        {/* === Right Side: Search & Sign In === */}
        <div className="hidden md:flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-[#E0610C] hover:bg-[#df730798] px-4 py-2 rounded-md font-semibold text-sm text-white transition">
            Sign In
          </button>
        </div>

        {/* === Mobile Menu Button === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {isOpen && (
        <div className="md:hidden bg-[#111] text-white px-6 pb-4 space-y-3 animate-slide-down">
          <a href="#home" className="block hover:text-[#E0610C] transition">
            Home
          </a>
          <a href="#radio" className="block hover:text-[#E0610C] transition">
            Radio
          </a>
          <a href="#podcast" className="block hover:text-[#E0610C] transition">
            Podcast
          </a>
          <a
            href="#audio-room"
            className="block hover:text-[#E0610C] transition"
          >
            Audio Rooms
          </a>
          {/* <a href="#" className="block hover:text-[#E0610C] transition">
            Music
          </a> */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 mt-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="w-full py-2 bg-[#E0610C] hover:bg-[#df730791] rounded-md font-semibold text-white transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
