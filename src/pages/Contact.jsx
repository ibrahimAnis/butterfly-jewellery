import React from "react";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <h2 className="text-[#d85c8a]">
          CONTACT <span className="text-gray-800">US</span>
        </h2>
      </div>

      <div className="my-16 flex flex-col justify-center md:flex-row gap-10 max-w-5xl mx-auto px-4">
        <img
          className="w-full md:max-w-md rounded-lg shadow-lg"
          src={"/src/assets/contact_img.png"}
          alt="Contact Us"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <div>
            <p className="font-semibold text-2xl text-gray-800 mb-2">Our Store</p>
            <p className="text-gray-600 leading-relaxed">
              401 Vatika Park <br />
              Gurugram, India
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <strong>Tel:</strong> (+91) 8765678756 <br />
              <strong>Email:</strong> ornateaura@gmail.com
            </p>
          </div>
          <div>
            <p className="font-semibold text-2xl text-gray-800 mb-2">Careers at OrnateAura</p>
            <p className="text-gray-600">Learn more about our teams and job openings.</p>
            <button className="border border-gray-800 px-8 py-2 text-sm hover:bg-gray-800 hover:text-white transition duration-500 rounded-lg mt-4">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
