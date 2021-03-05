import React, {createContext, useReducer} from "react";
import { CartReducer } from './CartReducer';
// context here in global
export const CartContext = createContext();

const CartContextProvider = ( props ) => {
    
    // "useReducer" takes two arguement 2nd is initial value
   // "dispatch" it give CartReducer
    const [cart, dispatch] = useReducer
    (
        CartReducer, 
        {shoppingCart: [], totalPrice: 0, qty: 0}
    )

    return (

        // "Provider" coming from createContext()

        // "Provider" mean data provide to child component 
        <CartContext.Provider value={{...cart, dispatch}}>

        {/* Child components here */}
        {props.children}
        </CartContext.Provider>
    )

}
export default CartContextProvider;