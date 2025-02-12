import React from "react";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div class=" max-w-6xl mx-auto px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300 mb-12">
          <h2 className="text-[#d85c8a]">
            ABOUT <span className="text-gray-800">US</span>
          </h2>
        </div>{" "}
        <p class="text-lg text-gray-700 mb-6">
          Welcome to <span class="font-semibold">OrnateAura</span> –{" "}
          <em>Where Elegance Meets Tradition</em>
        </p>
        <p class="text-gray-700 mb-6">
          At OrnateAura, we believe that jewellery is more than just an accessory; it’s an
          expression of who you are. Our journey began with a passion for creating timeless pieces
          that celebrate tradition, elegance, and individuality. Every design at OrnateAura is a
          masterpiece, meticulously crafted to bring out the beauty and radiance in every individual
          who wears it.
        </p>
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Why Choose OrnateAura?</h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <span class="text-[#d85c8a] font-bold mr-2">✔</span>
            <p class="text-gray-700">
              <strong>Exquisite Craftsmanship:</strong> Each piece is a testament to our commitment
              to quality and detail, blending heritage with innovation.
            </p>
          </li>
          <li class="flex items-start">
            <span class="text-[#d85c8a] font-bold mr-2">✔</span>
            <p class="text-gray-700">
              <strong>Premium Materials:</strong> From gleaming gold plating to vibrant gemstones,
              our jewellery is made with materials that stand the test of time.
            </p>
          </li>
          <li class="flex items-start">
            <span class="text-[#d85c8a] font-bold mr-2">✔</span>
            <p class="text-gray-700">
              <strong>Versatility:</strong> Whether it's a wedding, a festive celebration, or a
              casual outing, OrnateAura offers jewellery for every moment of your life.
            </p>
          </li>
          <li class="flex items-start">
            <span class="text-[#d85c8a] font-bold mr-2">✔</span>
            <p class="text-gray-700">
              <strong>Customer-Centric Approach:</strong> Your satisfaction is at the heart of what
              we do. We offer hassle-free shopping, easy returns, and personalized customer service
              to ensure your experience with us is nothing short of exceptional.
            </p>
          </li>
        </ul>
        <h3 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h3>
        <p class="text-gray-700 mb-6">
          To redefine jewellery by blending cultural heritage with modern designs, making every
          piece a symbol of beauty, confidence, and empowerment.
        </p>
        <h3 class="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h3>
        <p class="text-gray-700 mb-6">
          To inspire elegance and celebrate individuality through jewellery that tells your story.
          We are dedicated to creating timeless designs that resonate with the spirit of our
          customers while preserving the charm of traditional craftsmanship.
        </p>
        <p class="text-gray-700 text-lg font-semibold">
          Step into the world of <span class="text-[#d85c8a] font-bold">OrnateAura</span>, where
          every jewel shines with elegance, and every design carries a story. We invite you to
          discover your unique sparkle with us.
        </p>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
