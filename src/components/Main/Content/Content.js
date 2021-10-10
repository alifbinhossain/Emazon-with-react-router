import { addToCart, getStoredCart } from "../../../utilities/fakedb";
import "./Content.css";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

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

  const handleToAddCart = (product) => {
    let newCart = [...cart];
    const isExist = cart.find((eP) => eP.key === product.key); //eP: exisiting product in cart
    if (isExist) {
      product.quantity = product.quantity + 1;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    setCart(newCart);
    addToCart(product.key, true);
  };

  return (
    <main className="main">
      <section className="content-container pt-4">
        <div className="products-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleToAddCart={handleToAddCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} setCart={setCart}>
            <Link to="/order">
              <button className="btn btn-dark">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </section>
    </main>
  );
};

export default Content;
