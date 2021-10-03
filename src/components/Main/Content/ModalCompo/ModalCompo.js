import React from "react";
import ModalBody from "./ModalBody";
import "./ModalCompo.css";

const ModalCompo = (props) => {
  const { cart } = props;
  console.log(cart);
  // let totalQuantity = 0;
  const quantities = cart.map((product) => product.quantity);
  const prices = cart.map((product) => product.price * product.quantity);
  // console.log(quantities);
  const totalQuantity = quantities.reduce((pre, current) => pre + current, 0);
  const totalPrice = prices.reduce((pre, current) => pre + current, 0);
  const tax = (totalPrice * 0.1).toFixed(2);
  const shipping = cart[0]?.shipping || 0;
  const grandTotal = Number(totalPrice) + Number(tax) + Number(shipping);
  // console.log(quantities, prices);

  const isExist = cart.length ? null : "No products have been added yet..";
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark btn-modal"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Review your product
      </button>

      <div
        class="modal fade shopping-modal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content modal-box">
            <div class="modal-header">
              <h5 class="modal-title mx-auto" id="exampleModalLabel">
                Shopping Review
              </h5>
              <button
                type="button"
                className="btn-cart position-relative bg-dark"
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {totalQuantity}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
            <div class="modal-body px-4">
              <h5 className="text-danger text-center">{isExist}</h5>
              <ul className="list">
                {cart.map((product) => (
                  <ModalBody key={product.key} product={product}></ModalBody>
                ))}
              </ul>
            </div>
            <div class="modal-footer justify-content-between">
              <div>
                <button type="button" class="btn btn-success">
                  Confirm
                </button>
                <button
                  type="button"
                  class="btn btn-danger mx-2"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <h5 className="me-3">
                <small>Total Price : {grandTotal.toFixed(2)}</small>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCompo;
