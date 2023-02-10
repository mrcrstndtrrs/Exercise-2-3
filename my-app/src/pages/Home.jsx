import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceLine, RiSecurePaymentFill } from "react-icons/ri";
import { ImPriceTags } from "react-icons/im";
import ProductCart from "../components/ProductCart";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servcies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <FaShippingFast className="faShippingFast" />
                  <div>
                    <h6>Free Shpping</h6>
                    <p className="mb-0">From all orders over ₱500</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <RiCustomerServiceLine className="riCustomerService" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Loren empsum chuchu</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <ImPriceTags className="imPricetags" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Loren empsum chuchu</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <RiSecurePaymentFill className="riSecurePayment" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="order-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Order Now</h3>
            </div>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
