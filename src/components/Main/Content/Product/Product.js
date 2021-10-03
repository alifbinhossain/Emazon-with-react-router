import React from "react";
import Rating from "react-rating";
import "./Products.css";

const Product = (props) => {
  const { name, img, price, seller, star, stock, features } = props.product;

  return (
    <div className="product">
      <div className="product-poster p-2">
        <img src={img} alt="" />
      </div>
      {/* Product Details */}
      <div className="product-details p-4 ">
        <h4 className="product-title mb-3">{name}</h4>
        <div className="box d-flex align-items-end">
          <div className="left-info me-5">
            <p>
              <small>by {seller}</small>
            </p>
            <p className="product-price">Price ${price}</p>
            <Rating
              className="mb-3"
              initialRating={star}
              emptySymbol="far fa-star star"
              fullSymbol="fas fa-star star"
              readonly
            ></Rating>
            <p>
              <small>only {stock} left in stock - order soon</small>
            </p>
            <button
              onClick={() => props.handleToAddCart(props.product)}
              className="btn-regular"
            >
              <i className="fas fa-shopping-cart me-2"></i> add to cart
            </button>
          </div>
          <div className="right-info">
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li className="feature-item" key={index}>
                  {feature.description}: <span>{feature.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
