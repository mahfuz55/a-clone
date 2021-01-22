import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            {/* header__left */}
            {/* header__search */}
            {/* header__right */}

            <img className="header__logo" src="https://variety.com/wp-content/uploads/2018/01/amazon-logo.jpg?resize=681,383" alt="" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        SignIn
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className="header__optionBasketIcon" />
                    <span className="header__optionLineTwo header__optionBasketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
