import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [gemStones, setGemStones] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    setCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((a) => a !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleSubCategory = (e) => {
    setSubCategory((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((a) => a !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const toggleGemStone = (e) => {
    setGemStones((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((a) => a !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    if (gemStones.length > 0) {
      productsCopy = productsCopy.filter((item) => gemStones.includes(item.gemStones));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, gemStones, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Filter Options Trigger */}
      <div className="sm:min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 ml-2 text-black sm:hidden md:block ${showFilter ? "rotate-90" : ""}`}
            src={"/src/assets/dropdown_icon.png"}
            alt="Filters"
          />
        </p>
        <div className={`${showFilter ? "block" : "hidden"}`}>
          {/* Category Filter */}
          <div className="py-4">
            <p className="mb-3 text-base font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-base font-light text-gray-700">
              {[
                "Necklaces",
                "Jewellery Sets",
                "Earrings",
                "Bracelets",
                "Nose pins",
                "Hair Accessory",
              ].map((item) => (
                <label key={item} className="flex gap-2">
                  <input type="checkbox" value={item} onChange={toggleCategory} className="w-4" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="py-4 border-t">
            <p className="mb-3 text-base font-medium">MATERIAL</p>
            <div className="flex flex-col gap-2 text-base font-light text-gray-700">
              {["Brass", "Alloy"].map((item) => (
                <label key={item} className="flex gap-2">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={toggleSubCategory}
                    className="w-4"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Gem Stone Filter */}
          <div className="py-4 border-t">
            <p className="mb-3 text-base font-medium">GEM STONES</p>
            <div className="flex flex-col gap-2 text-base font-light text-gray-700">
              {["Kundan", "Kemp Stones", "Realkamp"].map((item) => (
                <label key={item} className="flex gap-2">
                  <input type="checkbox" value={item} onChange={toggleGemStone} className="w-4" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-base px-2 rounded-md"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* Bottom Sheet Filter */}
      {showFilter && (
        <div
          className="fixed inset-x-0 bottom-0 bg-white shadow-lg z-50 transition-transform transform translate-y-0 block md:hidden"
          style={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <p className="text-lg font-medium">Filters</p>
            <button onClick={() => setShowFilter(false)} className="text-gray-500 hover:text-black">
              Close
            </button>
          </div>

          <div className="px-4">
            {/* Category Filter */}
            <div className="py-4">
              <p className="mb-3 text-base font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-base font-light text-gray-700">
                {[
                  "Necklaces",
                  "Jewellery Sets",
                  "Earrings",
                  "Bracelets",
                  "Nose pins",
                  "Hair Accessory",
                ].map((item) => (
                  <label key={item} className="flex gap-2">
                    <input type="checkbox" value={item} onChange={toggleCategory} className="w-4" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="py-4 border-t">
              <p className="mb-3 text-base font-medium">MATERIAL</p>
              <div className="flex flex-col gap-2 text-base font-light text-gray-700">
                {["Brass", "Alloy"].map((item) => (
                  <label key={item} className="flex gap-2">
                    <input
                      type="checkbox"
                      value={item}
                      onChange={toggleSubCategory}
                      className="w-4"
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Gem Stone Filter */}
            <div className="py-4 border-t">
              <p className="mb-3 text-base font-medium">GEM STONES</p>
              <div className="flex flex-col gap-2 text-base font-light text-gray-700">
                {["Kundan", "Kemp Stones", "Realkamp"].map((item) => (
                  <label key={item} className="flex gap-2">
                    <input type="checkbox" value={item} onChange={toggleGemStone} className="w-4" />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
