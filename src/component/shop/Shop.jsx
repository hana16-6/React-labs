import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    return fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  console.log(products);
  return (
    <div>
      {products.length > 0 ? (
        <div>
          <h1>Shop</h1>
          <section>
            <div className="d-flex flex-wrap justify-content-center">
              {products.map((product) => {
                return (
                  <div key={product.id} className="border w-25 m-3 p-4">
                    <div className="d-flex justify-content-center">
                      <img className="w-50" src={product.image} alt="" />
                    </div>
                    <p>{product.title}</p>
                    <p> Price: {product.price}</p>
                    <p> Rate: {product.rating.rate}</p>
                    <button type="button" className="btn btn-primary">
                      <Link
                        className="text-light text-decoration-none"
                        to={`/details/${product.id}`}
                      >
                        View Details
                      </Link>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <div className="spinner-border text-danger mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
