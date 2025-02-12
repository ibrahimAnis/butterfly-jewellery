import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center">
        {/* Policy 1 */}
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-16 h-16 mb-3 bg-white p-3 rounded-full shadow-md"
            src={"/src/assets/exchange_icon.png"}
            alt="Easy Exchange"
          />
          <p className="font-semibold text-gray-800 text-lg">Easy Exchange Policy</p>
          <p className="text-gray-500 text-sm">We offer a hassle-free exchange policy.</p>
        </div>

        {/* Policy 2 */}
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-16 h-16 mb-3 bg-white p-3 rounded-full shadow-md"
            src={"/src/assets/quality_icon.png"}
            alt="7 Days Return"
          />
          <p className="font-semibold text-gray-800 text-lg">7 Days Return Policy</p>
          <p className="text-gray-500 text-sm">We provide a 7-day free return policy.</p>
        </div>

        {/* Policy 3 */}
        <div className="flex flex-col items-center gap-3">
          <img
            className="w-14 h-14 mb-3 bg-white p-3 rounded-full shadow-md object-contain"
            src={"/src/assets/support_img.png"}
            alt="Customer Support"
          />
          <p className="font-semibold text-gray-800 text-lg">Best Customer Support</p>
          <p className="text-gray-500 text-sm">We provide 24/7 customer support.</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
