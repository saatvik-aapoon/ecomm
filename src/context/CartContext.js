import React, { createContext, useState } from "react";

const CartContextAct = createContext();

function CartContext({children}) {
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem((prevCart) => [...prevCart, item]);
    console.log('item added to cart');
    console.log(CartItem);
  };

  return (
    <CartContextAct.Provider value={{  CartItem, addToCart }}>
      {children}
    </CartContextAct.Provider>
  );
}

export default CartContext;
export { CartContextAct };
