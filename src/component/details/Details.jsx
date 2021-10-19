import React from "react";
import { useState, useEffect } from "react";

export default function Details({ match }) {
  console.log("match", match);
  const [Product, setProduct] = useState(null);
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  console.log(Product);
  return (
    <div>
      {Product ? (
        <div className="d-flex justify-content-center my-5">
          <div className="w-50 border p-5">
            <div className="d-flex mb-3 justify-content-center">
              <img className="w-25" src={Product.image} alt="" />
            </div>
            <div className="text-start mt-5">
              <h5> {Product.title}</h5>
              <p> Price: {Product.price}</p>
              <p> Rate: {Product.rating.rate}</p>
              <p> Rate: {Product.category}</p>
              <p> Rate: {Product.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-danger mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
