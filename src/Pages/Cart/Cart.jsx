import {PropTypes} from "prop-types"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({product,setProducts,products}) => {

 
    const {_id,image,name,price}=product
    const handleDelete=()=>{
        fetch(`https://gadget-hub-server-b9ku9c0dp-biru60s-projects.vercel.app/cart/${_id}`,{
            method:"DELETE"
        },
        )
        .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            const remaining=products.filter(product=>product._id!==_id)
            setProducts(remaining);
            toast('Product Deleted Successfully')
        }})
    }

    return (
        <div className="">
         <div className="card card-compact h-96  bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p ><span className="text-xl font-medium">Price:</span>${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline text-sky-500 w-full" onClick={handleDelete}>Delete</button>
    </div>
  </div>
</div>
 <ToastContainer />
        </div>
    );
};
Cart.propTypes={
    product:PropTypes.object, 
    setProducts:PropTypes.function,
    products:PropTypes.array
}
export default Cart;