import React from "react";
import { useParams } from "react-router-dom";
import "./singleproduct.css";
import { useProductContext } from "../context/ProductContext";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { GiCheckedShield } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AddToCart } from "./AddToCart";
export const SingleProduct = () => {
  const { products } = useProductContext();

  let { id } = useParams();
  let singledata = products.find((e) => e.id === id);
  const { category, company, description, image, name, price } = singledata;
  return (
    <>
      <div className="page-nav">
        <Link to="/">Home</Link>/{name}
      </div>
      <div className="single-Page">
        <div className="sin-image">
          <img src={image} alt="images" height="300px" width="300px"></img>
        </div>
        <div className="single-page-data">
          <h1>{name}</h1>
          <h2>{category}</h2>
          <del>
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            }).format(price + 2000)}
          </del>
          <p className="card-data--price">
            Deal of the day:
            {Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            }).format(price / 100)}
          </p>
          <p>{description}</p>
          <div className="single-page-services">
            <div className="pdoduct-data-warranty">
              <TbTruckDelivery className="service-icons" />
              <p>Free Delivery</p>
            </div>
            <div className="pdoduct-data-warranty">
              <TbReplace className="service-icons" />
              <p>30 Days Replacement</p>
            </div>
            <div className="pdoduct-data-warranty">
              <TbTruckDelivery className="service-icons" />{" "}
              <p>Vikash Delivery</p>
            </div>
            <div className="pdoduct-data-warranty">
              <GiCheckedShield className="service-icons" />
              <p>2 year Warranty</p>
            </div>
          </div>
          <div className="brand">Brand: {company}</div>
          <AddToCart product={singledata} />
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
