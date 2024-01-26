import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProdcucts] = useState([]);
    const [cart, setCart] = useState([ ])
    useEffect(()=>{
        fetch('../../../fakeData/products.json')
        .then(res =>res.json())
        .then(data => setProdcucts(data))
    },[])
    const addToCartHanler=(product) =>{
        // console.log(' clicked', product);
        
        // console.log(count)
        const newCart = [...cart , product];
        setCart(newCart)
        console.log(newCart)
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
                <h3 style={{textAlign: 'center'}}>Order Summary</h3>

                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;