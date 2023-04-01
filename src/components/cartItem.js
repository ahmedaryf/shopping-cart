import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context';

function CartItem(props) {
    const {productId, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div>
       <div>
        <img src={productImage} alt='' width='200'/>
        <div>
            <h5>{productName}</h5>
            <h5>${price}</h5>
            <div>
                <button className='btn btn-danger' onClick={() => removeFromCart(productId)}> - </button>
                <input style={{width: '100px'}} className='text-center form-control-sm' value={cartItems[productId]}/>
                <button className='btn btn-success' onClick={() => addToCart(productId)}> + </button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItem; 