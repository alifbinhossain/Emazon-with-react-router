import React from "react";
import "./OrderReview.css";
import useCart from "../../../hooks/useCart";
import useProducts from "../../../hooks/useProducts";
import Cart from "../Content/Cart/Cart";
import ReviewItem from "./ReviewItem/ReviewItem";
import { addToCart, deleteFromCart, updateDb } from "../../../utilities/fakedb";

const OrderReview = () => {
  const [products, displayProducts, setProducts, setDisplayProducts] =
    useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromCart(key);
  };
  const quantityController = (key, isTrue) => {
    const currentProduct = cart.find((product) => product.key === key);
    isTrue
      ? (currentProduct.quantity = currentProduct.quantity + 1)
      : (currentProduct.quantity =
          currentProduct.quantity < 1 ? 0 : currentProduct.quantity - 1);
    const newCart = cart.map((product) =>
      product.key !== key ? product : currentProduct
    );
    setCart(newCart);
    console.log(cart);
    addToCart(key, isTrue);
  };
  return (
    <section className="content-container pt-4">
      <div className="products-container">
        <ul className="product-list">
          <li className="list-title-bar list-item">
            <div className="list-item-box list-item-box-1">
              <h4>Product's</h4>
            </div>
            <div className="list-item-box list-item-box-2">
              <h4>Price</h4>
            </div>
            <div className=" list-item-box list-item-box-3">
              <h4>Quantity</h4>
            </div>
          </li>
          {cart.length ? (
            cart.map((product) => (
              <ReviewItem
                product={product}
                key={product.key}
                handleRemove={handleRemove}
                quantityController={quantityController}
              ></ReviewItem>
            ))
          ) : (
            <li className="list-item empty-list">
              <p>Sorry,your order list is currently empty.</p>
            </li>
          )}
        </ul>
      </div>
      <div className="cart-container ps-4">
        <Cart cart={cart} setCart={setCart}></Cart>
      </div>
    </section>
  );
};

export default OrderReview;
