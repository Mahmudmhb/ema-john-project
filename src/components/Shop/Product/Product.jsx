import React from 'react';
import './Product.css'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
// console.log(faCartShopping)

const Product = (props) => {
    // console.log(props);
    const { name, img, ratings, seller, price } = props.product;

   const addToCartHanler = props.addToCartHanler;

    return (
        <div className='product-container'>
        <img src={img} alt="" />
        <div className="product-info">
            <h6>{name}</h6>
            <p>Price: {price}</p>
            <p> <small>Manufacturer: {seller}</small></p>
            <p> <small>Ratings: {ratings}</small></p>
        </div>
        <button className='cart-btn' 
        onClick={() => addToCartHanler(props.product)}
        >Add to Cart</button>
        </div>
    );
};

export default Product;