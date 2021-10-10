import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const activeLink = {
    backgroundColor: "#eeee",
    color: "#000",
  };
  return (
    <nav className="d-flex align-items-center justify-content-around container-full">
      <ul>
        <NavLink activeStyle={activeLink} to="/shop">
          Shop
        </NavLink>
        <NavLink activeStyle={activeLink} to="/order">
          Order
        </NavLink>
        <NavLink activeStyle={activeLink} to="/inventory">
          Manage Inventory
        </NavLink>
      </ul>
      <div className="input-group me-3 w-50">
        <input
          type="text"
          // onChange={handleSearch}
          className="form-control"
          placeholder="Products's name"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
      </div>
      <div>
        <Link className="btn-cart" to="*">
          <i className="fas fa-user"></i>
        </Link>
        <Link type="button" className="btn-cart position-relative" to="/order">
          <i className="fas fa-shopping-cart"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            <span className="visually-hidden">unread messages</span>
          </span>
        </Link>
        <Link className="btn-cart" to="*">
          <i className="fas fa-map-marker-alt"></i>
        </Link>
        <Link className="btn-cart" to="*">
          <i className="fas fa-phone"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
