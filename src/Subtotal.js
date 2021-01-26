import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { costAll } from "./reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value, prefix) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items) : <strong> {value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={costAll(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        suffix={"  -/"}
      />
      <button className="subtotal__button"> Check out</button>
    </div>
  );
}

export default Subtotal;
