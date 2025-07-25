import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer"
    >
      <div className=" overflow-hidden">
        <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
      </div>

      <p className="pt-3 pb-1 text-sm hover:text-brand_color">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price.toLocaleString("en-US")}
      </p>
    </Link>
  );
};

export default ProductItem;
