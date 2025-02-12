import Title from "./Title";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const categories = [
  {
    imageUrl: "https://priyaasi.com/cdn/shop/products/DC-RNG-10052.CR.jpg?v=1603531633&width=540",
    handle: "Rings",
  },
  {
    imageUrl: "https://priyaasi.com/cdn/shop/products/BA-PR-40223.CR.jpg?v=1649661421&width=360",
    handle: "Bangles",
  },
  {
    imageUrl: "https://priyaasi.com/cdn/shop/files/JS-PR-10219.CR.jpg?v=1686726096&width=360",
    handle: "Necklaces",
  },
  {
    imageUrl:
      "https://priyaasi.com/cdn/shop/products/BR-PR-20049_1_724e0a28-b8a5-4b94-b7fe-904fa31fe780.jpg?v=1716887618&width=540",
    handle: "Bracelets",
  },
  {
    imageUrl:
      "https://priyaasi.com/cdn/shop/products/BA-PR-40125-2-8_1_83126ea1-90fb-4b2b-b1cf-18006960601a.jpg?v=1716880439&width=720",
    handle: "Reception",
  },
];

export const Category = () => {
  const { navigate } = useContext(ShopContext);

  return (
    <>
      <div className="text-center pb-8 mt-8 md:mt-16">
        <Title text1={"EXPLORE BY"} text2={"CATEGORY"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Find Your Perfect Match Across Stunning Jewellery Styles and Designs.
        </p>
      </div>
      <div className="component-observer" data-index="0" style={{ "min-height": "100%" }}>
        <section className="h-full w-full flex flex-col bg-white-1  justify-center align-middle items-center">
          <div className="flex flex-col justify-center gap-[10px] align-middle items-center "></div>
          <div className=" cursor-pointer flex justify-start md:justify-center px-[10px] overflow-x-scroll align-middle gap-[2%] w-full max-w-[100vw] y-scroll scrollbar-thin items-center flex-nowrap overflow-auto">
            {categories.map((category) => (
              <div
                key={category.handle}
                className="text-center px-1.5 lg:px-5 pb-5"
                onClick={() => {
                  navigate("/collection");
                }}
              >
                <img
                  src={category.imageUrl}
                  className="rounded-full h-20 w-20 max-w-20 max-h-20 lg:w-[100px] lg:h-[100px] lg:max-w-[100px] lg:max-h-[100px]"
                  alt="tile"
                  width="100"
                  height="100"
                />
                <h4 className="mb-0 mt-2 text-center text-base">{category.handle}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
