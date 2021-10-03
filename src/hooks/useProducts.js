import { useEffect, useState } from "react";

const useProducts = (searchText) => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, [searchText]);

  return [products, displayProducts, setProducts, setDisplayProducts];
};

export default useProducts;
