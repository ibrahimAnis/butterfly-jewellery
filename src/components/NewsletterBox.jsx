import React from "react";

const NewsletterBox = () => {
  return (
    <div className="text-center bg-[#fdf7fa] p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-16">
      <p className="text-3xl font-bold text-[#d85c8a] mb-2">Subscribe Now & Get 20% Off!</p>
      <p className="text-gray-500 text-lg mb-6">
        Stay updated with our latest collections and exclusive offers. Don't miss out!
      </p>

      <form className="w-full sm:w-3/4 lg:w-2/3 flex items-center gap-4 mx-auto border border-gray-300 rounded-full p-2 bg-white">
        <input
          className="w-full flex-1 outline-none text-gray-700 placeholder-gray-400 px-4 py-2 rounded-full"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button
          className="bg-[#d85c8a] hover:bg-[#b04572] text-white font-medium px-8 py-2 rounded-full transition-all duration-300"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
