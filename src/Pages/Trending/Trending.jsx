import { useEffect, useState } from "react";
import TrendingDetail from "../TrendingDetail/TrendingDetail";


const Trending = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://gadget-hub-server-b9ku9c0dp-biru60s-projects.vercel.app/allproduct")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-4xl font-semibold mb-8">Trending</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.slice(8,14).map(product=><TrendingDetail key={product._id} product={product}></TrendingDetail>)
                }
            </div>
        </div>
    );
};

export default Trending;