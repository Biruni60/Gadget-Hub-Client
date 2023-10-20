import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";


const MyCart = () => {
    const loadedProducts=useLoaderData()
    const[products,setProducts]=useState(loadedProducts)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
           {
            products.map(product=><Cart key={product._id} product={product} setProducts={setProducts} products={products}></Cart>)
           }
        </div>
    );
};

export default MyCart;