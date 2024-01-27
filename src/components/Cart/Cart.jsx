import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    // console.log(props.addToCartHanler)
    let total = 0;
    let shipingTotal = 0;
    let subTotal = 0;
    let quantity = 0;
    for(const product of props.cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        
         total = total + product.price * product.quantity;
        shipingTotal = shipingTotal + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tex = total * 7 /100;
    subTotal= total + shipingTotal + tex;
    return (
        <div className='cart-container'>
             <h3>Order Summary</h3>
            <h4>Selected Items:{props.cart.length}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Total Shipping Charge: ${shipingTotal}</h4>
            <h4>Tax: ${tex .toFixed(2)}  </h4>
            <h2>Grand Total: ${subTotal}</h2>
            
        </div>
    );
};

export default Cart;