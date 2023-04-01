import React, {useContext} from 'react'
import {products} from "./products";
import { ShopContext } from '../context/shop-context';
import CartItem from './cartItem';

function Cart(props) {
    const {cartItems} = useContext(ShopContext);
  return (
    <div className='container-fluid'>
        <h1>Cart Items</h1>
        <div>
            {products.map((product) => (
               cartItems[product.productId] > 0 ? <CartItem key={product.productId} data={product}/> : null 
            ))}
        </div>
    </div>
  )
}

export default Cart;