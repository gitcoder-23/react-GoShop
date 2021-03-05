import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';

 const Cart = () => {
    const data = useContext(CartContext);
    console.log('context-data', data);
    return (

        <div className="cart-container" style={{marginTop: '100px', }}>
        <h1>Shopping Cart</h1>
    </div>
        // <div className="container"></div>
    )

}

export default Cart;
