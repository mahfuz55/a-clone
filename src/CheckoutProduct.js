import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./Stateprovider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = e => {
    dispatch({
      type: "REMOVE_ITEM",
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(each => (
              <span>*</span>
            ))}
        </div>
        <p className="checkoutProdcut__price">{price}</p>
        <button onClick={removeItem} className="checkoutProduct__button">
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
