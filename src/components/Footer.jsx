import heroImg from "../assets/images/npi4.png";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1e1e1e] to-[#292929] text-[#fff] px-4 sm:px-8 md:px-12 lg:px-20 py-12 font-poppins">
      <div className="max-w-7xl mx-auto grid gap-10 text-sm sm:text-base">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
          {/* === Logo === */}
          <a href="#home" className=" w-full max-w-md mx-auto">
            <div className="p-4 rounded-2xl transition-all duration-300 text-center flex flex-col items-start space-y-2">
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
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Voice of NRI is a vibrant platform amplifying the stories,
                talents, and perspectives of Non-Resident Indians worldwide.
                From cultural roots to global impact, we connect communities
                beyond borders.
              </p>
            </div>
          </a>

          <div className="flex flex-col items-center text-center">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 hover:text-[#E0610C] transition duration-300">
              TALK TO US
            </h2>
            <hr className="border-gray-500 mb-4 w-40" />
            <p>support@voiceofnri.com</p>
          </div>

          {/* 5. Follow Us */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-lg sm:text-xl font-bold  text-white mb-4 hover:text-[#E0610C] transition duration-300">
              Follow Us
            </h2>
            <hr className="border-gray-500 mb-4 w-40" />
            <div className="flex justify-center gap-5 text-black text-2xl">
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:text-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:text-blue-700 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="text-center mt-12 pt-6 border-t border-gray-600 text-gray-400 text-xs sm:text-sm flex justify-between items-center">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="text-white">Voice of NRI</span>. All rights
            reserved.
          </div>
          <div className="flex justify-between items-center">
            <a
              href="#terms"
              className="text-gray-400 hover:underline hover:text-[#E0610C] mx-2"
            >
              Terms & Conditions
            </a>
            |
            <a
              href="#privacy"
              className="text-gray-400 hover:underline hover:text-[#E0610C] mx-2"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
