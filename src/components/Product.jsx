import React from "react";

import { NavLink } from "react-router-dom";
import "./product.css";
const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <div className="card">
      <NavLink to={`/singleproduct/${id}`}>
        <figure>
          <img
            src={image}
            alt={name}
            height="200px"
            width="200px"
            className="feature-img"
          />
          <figcaption className="caption">{category}</figcaption>
        </figure>
      </NavLink>

      <div className="card-data">
        <div className="card-data-flex">
          <h3>{name}</h3>

          <p className="card-data--price">
            <del></del>
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            }).format(price / 100)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
