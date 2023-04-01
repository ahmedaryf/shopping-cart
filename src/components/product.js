import React, {useContext} from 'react'
import { ShopContext } from '../context/shop-context';

function Product(props) {
    const {productId, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemValue = cartItems[productId];
    console.log(cartItemValue);
  return (
    <div className='col-12 col-md-6 col-lg-4'>
        <img src={productImage} alt='Images' width='200'/>
        <div>
            <h5>{productName}</h5>
            <h5>{price}</h5>
            
        </div>
        <button className='btn btn-primary' onClick={() => addToCart(productId)} >Add to cart</button>
    </div>
    
  )
}

export default Product;