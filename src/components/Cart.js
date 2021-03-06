import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';

 const Cart = () => {
     
    // const data = useContext(CartContext);
    // console.log('context-data', data);
    // destructured data coming from cartContext.js
    const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
    console.log('context-data', shoppingCart);
    return (
        <div className="cart-container">
        <div className="cart-details" style={{marginTop: '100px', }}>
            {/* To check length shoppingCart is array  if product is greater than 0 then display */}
        { shoppingCart.length > 0 ? 
        shoppingCart.map(cart => (
            <div className="cart" key={cart.id}>
                <span className="cart-image">
                   <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">
                {cart.name}
                </span>

                <span className="cart-product-price">
                ${cart.price}.00
                </span>
            {/* INC & DNC ops in cartReducer */}
                <span className="inc" onClick={() => dispatch({
                    type: 'INC', id: cart.id, cart: cart
                })}>
                <i className="fas fa-plus"></i>
                </span>

                <span className="product-quantity">
                {cart.qty}
                </span>

                <span className="dec" onClick={() => dispatch({
                    type: 'DEC', id: cart.id, cart: cart
                })}>
                <i className="fas fa-minus"></i>
                </span>

                <span className="product-total-price">
                ${Math.ceil(cart.price * cart.qty)}
                </span>

                <span className="delete-product" onClick={() => dispatch({type: 'DELETE', id: cart.id, cart })}>
                <i className="fas fa-trash-alt"></i>
                </span>


            </div>
        ))
        : 'Sorry cart is currenty empty'}
    </div>
    {shoppingCart.length > 0 ? <div className="cart-summary">
        <div className="summary">
            <h3>Cart Summary</h3>
            <div className="total-items">
                <div className="items">
                    Total Items
                </div>
                <div className="items-count">{qty}</div>
            </div>
            <div className="total-price-section">
                <div className="just-title">
                    Total Price
                </div>
                <div className="items-price">${totalPrice}</div>
            </div>
            <div className="stripe-section">
                {/* Stripe button */}
            </div>
        </div>
    </div> : ''}
    </div>

    )

}

export default Cart;
