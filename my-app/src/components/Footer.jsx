import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <MdOutlineDeliveryDining className="mdDelivery" />
                <h2 className="mb-0 text-white">Sign Up for Delivery</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <FiSend className="fiSend" />
                </span>
              </div>
              {/*END INPUT GROUP*/}
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <div>
                  <address className="text-white">
                    Tondo Manila, Manila, Philippines
                  </address>
                  <a className="text-white mt-4 mb-2" href="tel: +639112244556">
                    +639112244556
                  </a>
                  <br />
                  <a
                    className="text-white mt-4 mb-2"
                    href="mailto: gabsplate@gmail.com"
                  >
                    gabsplate@gmail.com
                  </a>
                  <div className="social_icons d-flex align-items-center gap-15">
                    <a
                      className="text-white"
                      href="https://www.facebook.com/profile.php?id=100085809043886"
                    >
                      <BsFacebook className="fs-4" />
                    </a>
                    <a className="text-white" href="">
                      <BsInstagram className="fs-4" />
                    </a>
                    <a className="text-white" href="">
                      <BsTwitter className="fs-4" />
                    </a>
                    <a className="text-white" href="">
                      <BsPinterest className="fs-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Chicken Wings</Link>
                <Link className="text-white py-2 mb-1">Short Orders</Link>
                <Link className="text-white py-2 mb-1">
                  Platter/Bilao (Family Size)
                </Link>
                <Link className="text-white py-2 mb-1">Fried Rice</Link>
                <Link className="text-white py-2 mb-1">
                  With Yang Chow Rice
                </Link>
                <Link className="text-white py-2 mb-1">Others</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Gab's Plate{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
