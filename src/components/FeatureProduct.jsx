import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";
import "./featureproduct.css";
export const FeatureProduct = () => {
  const { featureProducts, isLoading } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <div className="feature-container">
      <h2 className="intro-data">Check Now!</h2>
      <h2 className="common-heading">Our Feature Services</h2>
      <div className="grid-three-column">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};
