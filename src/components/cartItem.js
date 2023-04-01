import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context';

function CartItem(props) {
    const {productId, productName, price, productImage} = props.data;
    const {cartItems, updateCartItem, addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div>
       <div>
        <img src={productImage} alt='' width='100'/>
        <div>
            <h5>{productName}</h5>
            <h5>${price}</h5>
            <div>
                <button onClick={() => removeFromCart(productId)}> - </button>
                <input style={{width: '100px'}} className='text-center' value={cartItems[productId]} onChange={(e) => updateCartItem(Number(e.target.value), productId)}/>
                <button  onClick={() => addToCart(productId)}> + </button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItem; 