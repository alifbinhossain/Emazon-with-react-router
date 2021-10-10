import React from "react";
import { useHistory } from "react-router";
import {
  addToCart,
  clearTheCart,
  updateDb,
} from "../../../../utilities/fakedb";

const Cart = (props) => {
  const { cart } = props;
  const { setCart } = props;

  const btnClear = () => {
    clearTheCart();
    setCart([]);
    updateDb({});
  };

  let itemsPrice = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (product.quantity === undefined) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;
    itemsPrice = itemsPrice + product.price * product.quantity;
  }
  const tax = (itemsPrice * 0.1).toFixed(2);
  const shipping = itemsPrice ? cart[0]?.shipping : 0;
  const total = Number(shipping) + Number(itemsPrice) + Number(tax);

  const history = useHistory();
  const handleReview = () => {
    history.push("/order");
  };
  return (
    <div className="cart">
      <h4 className="order-title">Order summary</h4>
      <p className="total-order">Items ordered : {totalQuantity} </p>
      <p className="pricing">
        <small className="d-flex justify-content-between">
          <span>Items:</span> <span>${itemsPrice.toFixed(2)}</span>
        </small>
      </p>
      <p className="pricing">
        <small className="d-flex justify-content-between">
          <span>Shipping:</span> <span>${shipping}</span>
        </small>
      </p>
      <p className="pricing">
        <small className="d-flex justify-content-between">
          <span>Tax:</span> <span>${tax}</span>
        </small>
      </p>
      <h5 className="total-price d-flex justify-content-between mb-3">
        <span>Order Total:</span> <span>${total.toFixed(2)}</span>
      </h5>
      <div className="btn-box d-flex justify-content-between">
        {props.children}
        <button onClick={() => btnClear()} className="btn btn-danger">
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Cart;
