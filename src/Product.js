import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

// we can even give default parameters to these destrutured objects
function Product({ id, title = " hello", image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addItem = e => {
    dispatch({
      type: "ADD_ITEM",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((val, pos) => {
              return <p>*</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addItem} className="product__button">
        add to basket
      </button>
    </div>
  );
}

export default Product;
