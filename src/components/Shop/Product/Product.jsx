import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, ratings, seller, shipping, price } = props.product;
    return (
        <div className='product-container'>
        <img src={img} alt="" />
        <div className="product-info">
            <h6>{name}</h6>
            <p>Price: {price}</p>
            <p> <small>Manufacturer: {seller}</small></p>
            <p> <small>Ratings: {ratings}</small></p>
        </div>
        <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;