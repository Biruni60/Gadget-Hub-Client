import { useState } from "react";
import Product from "../../Product/Product";



const Products = () => {
    const [products,setProducts]=useState([])
    fetch('/brand.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
    return (
        <div className=" max-w-screen-lg mx-auto my-10">
        <h2 className="text-center text-4xl font-bold mb-6">Brands</h2>
           <div className="grid  grid-cols-1 gap-4  md:grid-cols-2">
           {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;