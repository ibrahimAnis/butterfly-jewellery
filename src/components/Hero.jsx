import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Right Side */}
      <img
        className="w-full h-auto"
        src={
          "https://www.giva.co/cdn/shop/files/collection_banner-web_7_-min_f1995baa-3a05-4132-ab84-1ffb90d839fb.jpg?v=1688122506&width=1780"
        }
        alt=""
      />
    </div>
  );
};

export default Hero;
