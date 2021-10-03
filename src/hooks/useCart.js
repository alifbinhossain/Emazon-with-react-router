import { useEffect, useState } from "react";
import { addToCart, getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const existProduct = products.find((product) => product?.key === key);
        existProduct.quantity = savedCart[key];
        storedCart.push(existProduct);
      }
      setCart(storedCart);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
