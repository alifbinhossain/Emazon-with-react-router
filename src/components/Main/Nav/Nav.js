import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Nav.css";

const Nav = () => {
  const { user, userSignOut } = useAuth();
  console.log(user);
  const activeLink = {
    backgroundColor: "#fd7e14",
    fontWeight: 400,
    color: "#fff",
  };
  return (
    <nav className=" container-full">
      <div className="container d-flex align-items-center justify-content-evenly">
        <ul>
          <NavLink activeStyle={activeLink} to="/shop">
            Shop
          </NavLink>
          <NavLink activeStyle={activeLink} to="/order">
            Orders
          </NavLink>
          <NavLink activeStyle={activeLink} to="/inventory">
            Manage Inventory
          </NavLink>
          {user ? (
            <span>
              <button className="btn btn-success btn-sm" onClick={userSignOut}>
                Sign Out
              </button>
            </span>
          ) : (
            <NavLink activeStyle={activeLink} to="/form/signin">
              Sign In
            </NavLink>
          )}
        </ul>
        <div className=" ms-auto input-group me-3 w-25">
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
          {user?.photoURL ? (
            <img className="btn-cart" src={user.photoURL} alt="" />
          ) : (
            <Link className="btn-cart" to="*">
              <i className="fas fa-user"></i>
            </Link>
          )}
          <Link
            type="button"
            className="btn-cart position-relative"
            to="/order"
          >
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
      </div>
    </nav>
  );
};

export default Nav;
