import React from "react";
import "./Header.css";
import logo from "../../../../images/logo.png";
import Nav from "../Content/Nav/Nav";
import { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import useCart from "../../../hooks/useCart";

const Header = () => {
  // const [searchText, setSearchText] = useState("");
  // const [products, displayProducts, setProducts, setDisplayProducts] =
  //   useProducts(searchText);
  // const [cart, setCart] = useCart(products);

  // const handleSearch = (event) => {
  //   const searchTextValue = event.target.value;
  //   setSearchText(searchText);
  //   const productsFound = products.filter((product) =>
  //     product.name.toLowerCase().includes(searchTextValue.toLowerCase())
  //   );
  //   setDisplayProducts(productsFound);
  // };

  return (
    <header className="header sticky-top">
      <img className="logo" src={logo} alt="" />
      <Nav></Nav>
    </header>
  );
};

export default Header;
<h1>This is heading</h1>;
