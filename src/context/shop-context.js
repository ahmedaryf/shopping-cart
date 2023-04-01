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

   const contextValue = {cartItems, addToCart, removeFromCart};
   
  return (
    <div>
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    </div>
  )
}

