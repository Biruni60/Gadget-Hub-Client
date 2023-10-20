import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const handleAdd=e=>{
        e.preventDefault();
        const form=e.target;
        const image=form.image.value;
       const name=form.name.value;
    
        const brandNameAll=form.brandName.value;
        const brandName=brandNameAll.charAt(0).toUpperCase() + brandNameAll.slice(1)
  
        const type=form.type.value;
   
         const price=form.price.value;
         const shortDescription=form.shortDescription.value;
       const rating=form.rating.value;
       form.reset();
        const user={image,name,brandName,type,price,shortDescription,rating}
       console.log(user);
       fetch('http://localhost:5000/allproduct',{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.insertedId){
            toast('Product Added Successfully')
        }
       })
      
     }
    return (
        <div className="bg-[url('https://i.ibb.co/3YLC8ck/Curve-Line-1.jpg')]  p-2 lg:p-10">
            <h2 className="text-center text-4xl font-semibold ">Add Products</h2>
           <form onSubmit={handleAdd}>
           <div className="grid grid-cols-1 gap-2 md:gap-5 lg:grid-cols-4">
           <div className="col-span-4 mb-4"><p className="my-4 md:text-xl ">Add Image</p><input type="text" placeholder="Image URL" className="input input-bordered input-info w-full  bg-transparent  " name="image" /></div>
           <div className=" col-span-2 mb-4"><p className="mb-4 md:text-xl ">Add Name</p>  <input type="text" placeholder="Name" className="input input-bordered input-info w-full  bg-transparent " name="name"/></div>
           <div className=" col-span-2 mb-4"><p className="mb-4 md:text-xl ">Add Brand Name</p><input type="text" placeholder="Brand Name" className="input input-bordered input-info w-full  bg-transparent " name="brandName" /></div>
           <div className="col-span-2 mb-4"><p className="mb-4 md:text-xl "> Add Type</p><input type="text" placeholder="Type" className="input input-bordered input-info w-full  bg-transparent " name="type" /></div>
           
           <div className=" col-span-2 mb-4" ><p className="mb-4 md:text-xl ">Add Price</p><input type="text" placeholder="Price" className="input input-bordered input-info w-full  bg-transparent " name="price" /></div>
           <div className="col-span-3 mb-4"> <p className="mb-4  md:text-xl">Add Short Description</p><input type="text" placeholder=" short Description" className="input input-bordered input-info w-full  bg-transparent  " name="shortDescription" /></div>
           <div className="mb-4"><p className="mb-4 md:text-xl"> rating</p><input type="text" placeholder="Rating" className="input input-bordered input-info w-full  bg-transparent " name="rating" />  </div>
           <div className="col-span-4 mb-4"><input  className="input input-bordered input-info w-full  bg-transparent  text-2xl" type="submit" value="ADD" /></div>
           </div>
           </form>
           <ToastContainer />
        </div>
    );
};

export default AddProduct;