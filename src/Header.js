import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./Stateprovider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* header__left */}
      {/* header__search */}
      {/* header__right */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__logoWrapper" to="/authentication">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">SignIn</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasketIcon" />
            <span className="header__optionLineTwo header__optionBasketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
