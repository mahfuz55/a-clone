import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./Stateprovider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__leftAd"
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt=""
        />
        <div className="checkout__leftContainer">
          <h3 className="checkout__title">Your items </h3>
          <div className="checkout__list">
            {basket.map(item => {
              return (
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
