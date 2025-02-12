import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Footer = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <div className="bg-gray-50 text-gray-700">
      {/* Main Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 py-10 px-6 md:px-20 lg:px-40">
        {/* About the Brand */}
        <div>
          <p className="w-full md:w-3/4 text-sm leading-6">
            At <span className="font-semibold text-[#d85c8a]">OrnateAura</span>, we believe
            jewellery is more than just an accessory—it's a story of elegance, tradition, and
            individuality. From exquisite craftsmanship to timeless designs, we strive to make every
            piece as unique as you are.
          </p>
          <p className="mt-4 text-sm">
            Discover your sparkle with us, and let{" "}
            <span className="font-semibold text-[#d85c8a]">OrnateAura</span> be part of your
            unforgettable moments.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li
              className="hover:text-[#d85c8a] transition-colors cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className="hover:text-[#d85c8a] transition-colors cursor-pointer"
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </li>
            <li
              className="hover:text-[#d85c8a] transition-colors cursor-pointer"
              onClick={() => {
                navigate("/collection");
              }}
            >
              Collections
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-[#d85c8a] transition-colors">(+91) 8765678756</li>
            <li className="hover:text-[#d85c8a] transition-colors">ornateaura@gmail.com</li>
            <li className="hover:text-[#d85c8a] transition-colors">Gurugram, India</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">STAY CONNECTED</p>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and be the first to know about new collections, exclusive
            offers, and much more.
          </p>
          <form className="flex gap-2">
            <input
              className="flex-1 border border-gray-300 px-4 py-2 rounded-full outline-none text-sm"
              type="email"
              placeholder="Enter your email address"
              required
            />
            <button
              className="bg-[#d85c8a] text-white px-4 py-2 rounded-full text-sm hover:bg-[#b04572] transition-all"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300">
        <p className="py-4 text-center text-xs text-gray-600">
          © 2024 OrnateAura - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
