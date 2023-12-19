import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../store/products";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  return (
    <div>
      <h1>products</h1>
      {products.map((product) => (
        <ul>
          <li>{product.title}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
