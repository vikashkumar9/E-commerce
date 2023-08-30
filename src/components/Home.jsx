import React from "react";
import Information from "./Information";
import { Services } from "./Services";
import { Trusted } from "./Trusted";
import { FeatureProduct } from "./FeatureProduct";
export const Home = () => {
  return (
    <>
      <Information />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
