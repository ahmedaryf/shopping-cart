import React from 'react';
import {products} from "./products";

function Shop() {
  return (
    <div className='container-fluid'>
        <div className='row text-center g-5'>
        <h1 className='text-center mb-5'>Shop</h1>
        {products.map((item) => (
            <div key={item.productId} className='col-12 col-md-6 col-lg-4'>
                <h5>{item.productName}</h5>
                <img src={item.productImage} alt="Product photos" width='200'/>
                <h5 className='mt-3'>${item.price}</h5>
                <button className='btn btn-primary' >Add to cart</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Shop;