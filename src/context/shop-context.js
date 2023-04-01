import React, {createContext, useState} from 'react'
import { products } from '../components/products';

export const ShopContext = createContext(null);

const getDefaulfCart = () => {
    let cart = {};
    for (let i = 1; i < products.length +1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export function ShopContextProvider(props) {
    const [cartItems, setCartItems ] = useState(getDefaulfCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.productId === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    const getTotalCartTaxAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.productId === Number(item));
                totalAmount += (cartItems[item] * itemInfo.price) * .10;
            }
        }
        return totalAmount;
    }

    const updateCartItem = (newAmount, itemId) => {
     setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }
   const contextValue = {cartItems, addToCart, removeFromCart, updateCartItem, getTotalCartAmount, getTotalCartTaxAmount};

   
  return (
    <div>
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    </div>
  )
}

