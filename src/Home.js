import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Consumables/JanART/MainEvent/GW/Herotators/RevisedUnrec/Family/23._CB661872749_.jpg" alt="" />
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />

                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
