import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId]) {
        cartData[itemId] += 1;
      } else {
        cartData[itemId] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  const updateQuantity = async (itemId, quantity = 1) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      try {
        if (cartItems[items] > 0) {
          totalCount += cartItems[items];
        }
      } catch (error) {}
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      try {
        if (cartItems[items] > 0) {
          totalAmount += itemInfo.price * cartItems[items];
        }
      } catch (error) {}
    }
    return totalAmount;
  };

  const value = {
    currency,
    delivery_fee,
    products,
    navigate,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    updateQuantity,
    cartItems,
    getCartCount,
    getCartAmount,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
