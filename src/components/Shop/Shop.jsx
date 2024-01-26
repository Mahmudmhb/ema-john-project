import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';

const Shop = () => {
    const [products, setProdcucts] = useState([]);
    useEffect(()=>{
        fetch('../../../fakeData/products.json')
        .then(res =>res.json())
        .then(data => setProdcucts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="product-section">
              
                {
                    products.map(product => <Product product={product} key={product.id}>

                    </Product>)
                }
            </div>
            <div className="order-section">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;