import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemove, quantityController } = props;
  const { key, quantity, name, price, img } = product;
  const totalPrice = parseFloat(price) * parseFloat(quantity);
  return (
    <li className="list-item">
      <div className="list-item-box list-item-box-1 d-flex align-items-center">
        <img className="me-4" src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="list-item-box list-item-box-2">
        <p>{totalPrice.toFixed(2)}</p>
      </div>
      <div className=" list-item-box list-item-box-3 d-flex align-items-center justify-content-between">
        <div className="quantity-box d-flex ps-4">
          <button
            className="btn-remove"
            onClick={() => quantityController(key, false)}
          >
            <i class="fas fa-minus"></i>
          </button>
          <p className="mx-1 quantity">{quantity}</p>
          <button
            className="btn-remove"
            onClick={() => quantityController(key, true)}
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <button className="btn-remove" onClick={() => handleRemove(key)}>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
};

export default ReviewItem;
