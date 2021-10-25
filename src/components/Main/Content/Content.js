import { addToCart } from "../../../utilities/fakedb";
import "./Content.css";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import useCart from "../../../hooks/useCart";

const Content = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 10;

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${currentPage}&&limit=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);
        const totalProducts = data?.count;
        const totalPage = Math.ceil(totalProducts / size);
        setPageCount(totalPage);
      });
  }, [currentPage]);

  const handleToAddCart = (product) => {
    let newCart = [...cart];
    const isExist = cart.find((eP) => eP.key === product.key); //eP: exisiting product in cart
    if (isExist) {
      product.quantity = product?.quantity + 1;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    setCart(newCart);
    addToCart(product.key, true);
  };

  const handlePagination = (number) => {
    products.length = 0;
    setTimeout(() => {
      setCurrentPage(number);
    }, 1500);
  };

  return (
    <main className="main">
      <section className="content-container pt-4">
        <div className="products-container">
          {products.length > 0 ? (
            displayProducts.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleToAddCart={handleToAddCart}
              ></Product>
            ))
          ) : (
            <div className="spinner-box">
              <Spinner animation="grow" variant="warning" />
            </div>
          )}

          <div className="pagination">
            {[...Array(pageCount).keys()].map((n) => (
              <button
                className={n === currentPage ? "selected" : ""}
                onClick={() => handlePagination(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <Cart cart={cart} setCart={setCart}>
            <Link to="/order">
              <button className="btn btn-dark">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </section>
    </main>
  );
};

export default Content;
