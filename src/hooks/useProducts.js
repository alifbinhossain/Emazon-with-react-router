import { useEffect, useState } from "react";

const useProducts = (searchText) => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);
      });
  }, [searchText]);

  return [products, displayProducts, setProducts, setDisplayProducts];
};

export default useProducts;
