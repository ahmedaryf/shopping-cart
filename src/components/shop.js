import React, {useContext} from 'react';
import {products} from "./products";
import { ShopContext } from '../context/shop-context';
import {Button} from "./button";
import Product from './product';


function Shop() {
    const {addToCart} = useContext(ShopContext);
 
  return (
    <div className='container-fluid'>
        <div className='row text-center g-5'>
        <h1 className='text-center mb-5'>Shop</h1>
        {products.map((item) => (
            
            <div key={item.productId} className='col-12 col-md-6 col-lg-4'>
            {/* <Product data={item} /> */}
                <img src={item.productImage} alt="Product photos" width='200'/>
                <h5 className='mt-3'>{item.productName}</h5>
                <h5>${item.price}</h5>
                <Button data={item} />
                
                {/* <button className='btn btn-primary' onClick={() => addToCart(item.productId)} >
                    Add to cart {item.productId > 0 && <>({item.productId})</>}
                </button> */}
            </div> 
        
        ))}
        </div>
    </div>
  )
}

export default Shop;