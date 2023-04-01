import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context';


export function Button(props) {
    const {productId, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemValue = cartItems[productId];
  
  return (
    <div>
        <button className='btn btn-primary' onClick={() => addToCart(productId)} >Add to cart
        {cartItemValue > 0 && <>({cartItemValue})</>}
        </button>
    </div>
  )
}

