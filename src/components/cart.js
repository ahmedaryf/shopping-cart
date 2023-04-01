import React, {useContext} from 'react'
import {products} from "./products";
import { ShopContext } from '../context/shop-context';
import CartItem from './cartItem';
import { useNavigate } from 'react-router-dom';


function Cart(props) {
    const {cartItems, getTotalCartAmount, getTotalCartTaxAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const totalTax = getTotalCartTaxAmount();
    const total = totalAmount+totalTax;
    const navigate = useNavigate();
  return (
    <div className='container-fluid text-center'>
        <h1 className='mb-5'>Cart Items</h1>
        <div>
            {products.map((product) => (
               cartItems[product.productId] > 0 ? <CartItem key={product.productId} data={product}/> : null 
            ))}
        </div>
        {totalAmount > 0 ?
        <div className='mb-5'>
            <h6 className='mt-5'>Subtotal: ${totalAmount}</h6>
            <h6>Tax: ${totalTax}</h6>
            <h4>Total: ${total}</h4>
            <button className='btn btn-secondary me-3'>Checkout</button>
            <button onClick={() => navigate('/shop')} className='btn btn-warning'>Continue Shopping</button>
        </div> : <h3>Cart is empty</h3>}
    </div>
  )
}

export default Cart;