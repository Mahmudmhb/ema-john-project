import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';
import Cart from '../Cart/Cart';
import {  addToDb, getShoppingCart } from '../../Utilits/Utilitis';

const Shop = () => {
    const [products, setProdcucts] = useState([]);
    const [cart, setCart] = useState([ ])
    useEffect(()=>{
        fetch('../../../fakeData/products.json')
        .then(res =>res.json())
        .then(data => setProdcucts(data))
    },[])

   useEffect(()=>{
    const savedCart = [];
    const storedProduct = getShoppingCart();
        for(const id in storedProduct){
            const addedProducts = products.find(product => product.id === id);
        if(addedProducts){
            const quantity = storedProduct[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts)
        }
        console.log(addedProducts)
    }
    setCart(savedCart)
   },[products])
    const addToCartHanler=(product) =>{
        const newCart = [...cart , product];
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-section">
              
                {
                    products.map(product => <Product product={product} key={product.id} addToCartHanler={addToCartHanler}>

                    </Product>)
                }
            </div>
            <div className="order-section">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;