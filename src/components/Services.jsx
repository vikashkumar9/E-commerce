import React from "react";
import "./services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
export const Services = () => {
  return (
    <>
      <div className="services">
        <div className="service1 br-color">
          <div className="services-icons">
            <TbTruckDelivery />
          </div>
          <h4>Super Fast and Free Delivery</h4>
        </div>
        <div className="services2">
          <div className="services-col-2 br-color">
            <div className="services-icons">
              <MdSecurity />
            </div>
            <h4>Non-contact Shipping</h4>
          </div>

          <div className="services-col-2 br-color">
            <div className="services-icons">
              <GiReceiveMoney />
            </div>
            <h4>Money-back Guaranted</h4>
          </div>
        </div>
        <div className="services3 br-color">
          <div className="services-icons">
            <RiSecurePaymentLine />
          </div>
          <h4>Super Secure Payment System </h4>
        </div>
      </div>
    </>
  );
};
