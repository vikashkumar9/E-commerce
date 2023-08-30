import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import "./featureproduct.css";
export const FeatureProduct = () => {
  const { featureProducts, isLoading, products } = useProductContext();
  console.log(products);

  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <div className="feature-container">
      <div className="intro-data">Check Now!</div>
      <div className="common-heading">Our Feature Services</div>
      <div className="grid grid-three-column">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};
