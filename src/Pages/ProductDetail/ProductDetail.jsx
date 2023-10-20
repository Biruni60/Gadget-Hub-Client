import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";

const ProductDetail = () => {
    const product=useLoaderData();
    const {user}=useContext(AuthContext)
   const uid= user? user.uid:"";
    const {image,shortDescription,price,name}=product;
    const handleAddToCart=()=>{
      const productDetail={image,name,price,uid};
      fetch('https://gadget-hub-server-gven5krvm-biru60s-projects.vercel.app/cart',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(productDetail)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.insertedId){
          toast(' Added To Cart Successfully')
        }
       })
     
    }
    return (
        <div>
           <div className="card p-4 my-10 h-[70vh] bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
  <p className="text-2xl font-medium">{name}</p>
    <p className="my-2 text-lg ">{shortDescription}.</p>
    <div className="card-actions ">
      <button onClick={handleAddToCart} className="btn btn-outline text-sky-500 w-full">ADD TO CART</button>
    </div>
  </div>
</div>
 <ToastContainer />
        </div>
    );
};

export default ProductDetail; 