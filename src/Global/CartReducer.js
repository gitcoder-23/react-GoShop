/* eslint-disable default-case */



// to add product, update, delete pro

export const CartReducer = (state, action) => {

    const {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;

    switch(action.type){
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

         default:
             return state;   
    }
};


export default CartReducer;