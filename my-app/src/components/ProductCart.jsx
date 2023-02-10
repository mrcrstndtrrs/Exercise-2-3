import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const ProductCart = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="product-image">
          <img
            src="images/food/chickenwings.jpg"
            className="img-fluid"
            alt="Chicken Wings"
          />
          <img
            src="images/food/carbonara.jpg"
            className="img-fluid"
            alt="Carbonara"
          />
        </div>

        <div className="product-details m-2">
          <h6 className="product-title">Chicken wings</h6>
          <ReactStars
            count={5}
            size={24}
            value="3"
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">₱150.00</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <BsCart3 className="bsCart3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
