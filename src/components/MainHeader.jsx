import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

import heroImg from "../assets/images/nri.jpg";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* === Logo === */}
        <a href="#home">
          <div className="flex items-center space-x-2 bg-[#efeded] rounded-full">
            <img
              src={heroImg}
              alt="SwaraCast Logo"
              className="w-10 h-10 md:w-18 md:h-18 object-contain rounded-full"
            />
          </div>
        </a>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex space-x-6 text-lg md:text-xl text-white">
          <a href="#home" className="hover:text-[#df7307fd] transition">
            Home
          </a>
          <a href="#radio" className="hover:text-[#df7307fd] transition">
            Radio
          </a>
          <a href="#podcast" className="hover:text-[#df7307fd] transition">
            Podcast
          </a>
          <a href="#audio-room" className="hover:text-[#df7307fd] transition">
            Audio Room
          </a>
          {/* <a href="#" className="hover:text-[#df7307fd] transition">
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
          <button className="bg-[#df7307fd] hover:bg-[#df730798] px-4 py-2 rounded-md font-semibold text-sm text-white transition">
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
          <a href="#home" className="block hover:text-[#df7307fd] transition">
            Home
          </a>
          <a href="#radio" className="block hover:text-[#df7307fd] transition">
            Radio
          </a>
          <a
            href="#podcast"
            className="block hover:text-[#df7307fd] transition"
          >
            Podcast
          </a>
          <a
            href="#audio-room"
            className="block hover:text-[#df7307fd] transition"
          >
            Audio Room
          </a>
          {/* <a href="#" className="block hover:text-[#df7307fd] transition">
            Music
          </a> */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 mt-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="w-full py-2 bg-[#df7307fd] hover:bg-[#df730791] rounded-md font-semibold text-white transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
}
