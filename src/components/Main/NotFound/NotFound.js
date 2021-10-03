import React from "react";
import "./NotFound.css";
import errorImage from "../../../images/page-not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container d-flex align-items-center justify-content-center">
      <div className="content w-50 d-flex flex-column align-items-center justify-content-center">
        <img className="w-75" src={errorImage} alt="" />
        <h4 className="max-content mt-3">Page is not found..</h4>
        <Link to="/shop">Back to shop</Link>
      </div>
    </div>
  );
};

export default NotFound;
