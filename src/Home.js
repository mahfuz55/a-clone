import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Consumables/JanART/MainEvent/GW/Herotators/RevisedUnrec/Family/23._CB661872749_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
          <Product
            id={2}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
          <Product
            id={3}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
          <Product
            id={4}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
        </div>
        <div className="home__row">
          <Product
            id={5}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
          <Product
            id={6}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
        </div>
        <div className="home__row">
          <Product
            id={7}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
          <Product
            id={8}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
          <Product
            id={9}
            title="loorem lorem lorem lorem"
            rating={4}
            price={99.99}
            image="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
            className="product__image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
