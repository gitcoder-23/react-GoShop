import React, { useContext } from 'react';
import { ProductsContext } from '../Global/ProductsContext';
import Banner from './Banner';
const Products = () => {


    // const data = useContext(ProductsContext);
    // console.log('all product', data);
    // "products" coming from ProductsContext page
    const {products} = useContext(ProductsContext);
    

    return (
        <>
        
        <Banner />
        <div className="products">
            {/* map accesses all objects */}
            {products.map((product) =>(
                <div className="product" key={product.id}>
                    
                    <div className="product-image">
                        <img src={product.image} alt="not found" name={product.name} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                            {product.name}

                            </div>

                            <div className="product-price">
                            ${product.price}.00

                            </div>

                            
                        
                        </div>
                        
                    <div className="add-to-cart">
                        Add To cart
                    </div> 
                    {/* check status here */}
                    {product.status === 'hot' ? <div className="hot">Hot</div>: ''}

                    {product.status === 'new' ? <div className="new">New</div>: ''}
   

                </div>
            ))}
        </div>

        </>

    )

}
export default Products;