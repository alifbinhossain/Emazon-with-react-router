import React from "react";

const ModalBody = (props) => {
  const { name, quantity, price, img } = props.product;
  return (
    <div className="d-flex align-items-center justify-content-between product-item">
      <img src={img} alt="" />
      <h6>{name.slice(0, 15)}..</h6>
      {/* <p>
        <small></small>
      </p> */}
      <p>
        <small>quantity: {quantity}</small>
      </p>
      <p>
        <small>price: {(price * quantity).toFixed(2)}</small>
      </p>
    </div>
  );
};

export default ModalBody;
