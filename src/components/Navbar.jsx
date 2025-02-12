import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 px-6 md:px-10 bg-white shadow-md  w-full z-50">
      {/* Logo */}
      <Link to="/">
        <p className="text-brand_color fontBold text-2xl">OrnateAura</p>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700 font-medium">
        {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-1 ${
                isActive ? "text-[#d85c8a]" : "text-gray-700"
              }`
            }
          >
            <p>{item}</p>
            <span
              className={`${
                window.location.pathname === `/${item.toLowerCase()}` ? "block" : "hidden"
              } w-2/4 h-[2px] bg-[#d85c8a] transition-all`}
            />
          </NavLink>
        ))}
      </ul>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          className="w-4 md:w-5 cursor-pointer hover:opacity-75"
          src={"/src/assets/search_icon.png"}
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            onClick={() => navigate("/login")}
            className="w-4 md:w-5 cursor-pointer hover:opacity-75"
            src={"/src/assets/profile_icon.png"}
            alt="Profile"
          />
          <div className="absolute hidden group-hover:block right-0 top-full  bg-white shadow-lg rounded-lg w-40">
            <div className="flex flex-col gap-2 py-3 px-4">
              <p
                onClick={() => {}}
                className="cursor-pointer hover:text-[#d85c8a] transition-colors"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-[#d85c8a] transition-colors"
              >
                Orders
              </p>
              <p
                onClick={() => {}}
                className="cursor-pointer hover:text-[#d85c8a] transition-colors"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img
            className="w-4 md:w-5 hover:opacity-75"
            src={"/src/assets/cart_icon.png"}
            alt="Cart"
          />
          <p className="absolute -right-2 -bottom-2 w-4 h-4 bg-black text-white text-[8px] flex items-center justify-center rounded-full">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <img
          onClick={() => setVisible(true)}
          className="w-4 md:w-5 cursor-pointer sm:hidden hover:opacity-75"
          src={"/src/assets/menu_icon.png"}
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg z-40 transition-all transform ${
          visible ? "translate-x-0 w-[75%]" : "translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-4 border-b">
            <img
              className="h-4 rotate-180 cursor-pointer"
              src={"/src/assets/dropdown_icon.png"}
              alt="Back"
            />
            <p>Back</p>
          </div>
          {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="py-4 px-6 text-gray-600 hover:bg-brand_color border-b"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
