import axios from "axios";
import { useEffect, useState } from "react";
import { addToCart, getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getStoredCart();
    const keys = Object.keys(savedCart);

    axios.post("http://localhost:5000/products/byKeys", keys).then((data) => {
      const products = data.data;
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
    });
  }, []);

  return [cart, setCart];
};

export default useCart;
