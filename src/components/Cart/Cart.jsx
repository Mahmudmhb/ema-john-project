import React from 'react';

const Cart = (props) => {
    // console.log(props)
    // console.log(props.addToCartHanler)
    return (
        <div className='cart-container'>
            <h4>Selected Items:{props.cart}</h4>
            <h4>Total Price: $1140</h4>
            <h4>Total Shipping Charge: $5</h4>
            <h4>Tax: $114  </h4>
            <h2>Grand Total: $1559</h2>
            
        </div>
    );
};

export default Cart;