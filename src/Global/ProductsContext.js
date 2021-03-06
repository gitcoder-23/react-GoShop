import React, {createContext, useState} from "react"

// all images imported
import iphone from "../assets/iphone.jpg";
import headphones from "../assets/headphones.jpg";
import blueYetti from "../assets/microphone.jpg";
import rings from "../assets/rings.jpg";
import shoes from "../assets/shoes.jpg";
import watch from "../assets/watch.jpg";
import perfume from "../assets/perfume.jpg";
import dslr from "../assets/dslr.jpg";

// context here in global
export const ProductsContext = createContext();

const ProductsContextProvider = ( props ) => {
    // "hot" means newly added
    const [products] = useState([

        { id: 1, name: 'Dslr', price: 300, image: dslr, status: 'hot'},
        { id: 2, name: 'Head Phone', price: 299, image: headphones, status: 'new'},
        { id: 3, name: 'Iphone', price: 68000, image: iphone, status: 'hot'},
        { id: 4, name: 'Blue Yetti', price: 30000, image: blueYetti, status: 'hot'},
        { id: 5, name: 'Perfume', price: 899.58, image: perfume, status: 'new'},
        { id: 6, name: 'Rings', price: 799.89, image: rings, status: 'new'},
        { id: 7, name: 'Shoes', price: 7899, image: shoes, status: 'hot'},
        { id: 8, name: 'Watch', price: 6899, image: watch, status: 'new'},


    ]);

    return (

        // "Provider" coming from createContext()

        // "Provider" mean data provide to child component 

        // All products data access here in value
        // products is an array
        <ProductsContext.Provider value={{products: [...products]}}>

        {/* Child components here */}
        {props.children}
        </ProductsContext.Provider>
    )

}
export default ProductsContextProvider;