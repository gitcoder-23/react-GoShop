/* eslint-disable default-case */



// to add product, update, delete pro

export const CartReducer = (state, action) => {

    const {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type){
        // Case 1
        case 'ADD_TO_CART':
            // console.log('Add to cart' );
            // same product can't be added again
            const check = shoppingCart.find(product => product.id === action.id);
            if(check){
                return state;
            }else{
                product= action.product;
                // quantity setup here initial 1
                product['qty'] = 1;
                // in product page initial qty =0
                updatedQty = qty + 1;
                updatedPrice = totalPrice + product.price;

                // to add new protuct
                return {shoppingCart: [product, ...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
            }
            break;

        // Case 2 increase product

        case 'INC':
            product = action.cart;
            product.qty = product.qty + 1;
            updatedPrice = totalPrice + product.price;
            // incremented by 2
            // updatedQty = qty + product.qty;
            updatedQty = qty + 1;
            // findIndex() to find index from 
            // to find product index
            index = shoppingCart.findIndex
            (
                cart => cart.id === action.id
                
            );

            shoppingCart[index] = product;

            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
        break;


        // Case 3 decrease product

        case 'DEC':
            product = action.cart;
            if(product.qty > 1) {
            product.qty = product.qty - 1;
            updatedPrice = totalPrice - product.price;
            updatedQty = qty - 1;

            
            
            // findIndex() to find index from 
            // to find product index
            index = shoppingCart.findIndex
            (
                cart => cart.id === action.id
                
            );

            shoppingCart[index] = product;

            return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
            }else {
                return state;
            }
        break;
        
        // Case 4 delete
        case 'DELETE': 
        // if not equal then rejected
            const filtered = shoppingCart.filter(product => product.id !== action.id);
            product = action.cart;
            updatedQty = qty - product.qty;
            updatedPrice = totalPrice - product.price * product.qty;

            return {shoppingCart: [...filtered], totalPrice: updatedPrice, qty: updatedQty}
        
        break;

        // Case 5 EMPTY cart
        case 'EMPTY': 
        // empty product occur
           return {shoppingCart: [], totalPrice: 0, qty: 0};

        default:
        return state;   
    }
};


export default CartReducer;