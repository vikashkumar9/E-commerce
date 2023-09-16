import React from "react";
import Information from "./Information";
import { Services } from "./Services";
import { Trusted } from "./Trusted";
import { FeatureProduct } from "./FeatureProduct";
export const Home = () => {
  return (
    <>
      <Information
        about="You can use product descriptions and
       details to provide in-depth information about products 
       that customers can't get in a physical store. Save time: Quicker shopping "
      />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
