import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context';


export function Button(props) {
    const {productId} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemValue = cartItems[productId];
    const btColor = cartItemValue > 0 ? 'btn btn-success' : 'btn btn-primary';

  return (
    <div>
        <button className={btColor} onClick={() => addToCart(productId)}> Add to cart
        {cartItemValue > 0 && <> ({cartItemValue})</>} </button>
    </div>
  )
}

