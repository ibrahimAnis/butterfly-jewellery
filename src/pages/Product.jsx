import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {" "}
        {/* -------- Product Row ---------- */}
        {/* -------- Product Images ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3.5" src={"/src/assets/star_icon.png"} alt="" />
            <img className="w-3.5" src={"/src/assets/star_icon.png"} alt="" />
            <img className="w-3.5" src={"/src/assets/star_icon.png"} alt="" />
            <img className="w-3.5" src={"/src/assets/star_icon.png"} alt="" />
            <img className="w-3.5" src={"/src/assets/star_dull_icon.png"} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price.toLocaleString("en-US")}
          </p>
          <p className="mt-2 text-gray-500 md:w-4/5">Inclusive of all taxes.</p>

          <button
            onClick={() => addToCart(productData._id)}
            className="bg-brand_color px-8 py-3 text-sm active:bg-gray-700 mt-10 rounded-lg hover:shadow-lg w-full hover:bg-[#b04572] text-white font-medium transition-all duration-300"
          >
            ADD TO CART
          </button>

          <hr className="my-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 flex flex-col gap-4">
            <p>
              <strong>Authenticity Guaranteed:</strong> Each piece is 100% original and crafted to
              perfection.
            </p>
            <p>
              <strong>Shop with Confidence:</strong> Enjoy the convenience of Cash on Delivery for
              this product.
            </p>
            <p>
              <strong>Hassle-Free Shopping:</strong> Benefit from our easy return and exchange
              policy, valid within 7 days.
            </p>
            <p>
              <strong>Quality You Can Trust:</strong> Our products are genuine and meticulously
              checked for excellence.
            </p>
            <p>
              <strong>Your Satisfaction, Our Priority:</strong> Experience stress-free returns and
              exchanges within a week.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-base text-brand_color">Description</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p dangerouslySetInnerHTML={{ __html: productData.description }}></p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;
