import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, aliquid.</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>76.9</strong>
                </p>
                <div className="product__rating">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" className="product__image" />
            <button>add to basket</button>
        </div>
    )
}

export default Product
