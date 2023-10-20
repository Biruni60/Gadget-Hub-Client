import { useLoaderData } from "react-router-dom";


const ProductDetail = () => {
    const product=useLoaderData();
    const {_id,image,shortDescription}=product;
    return (
        <div>
           <div className="card p-4 my-10 h-[70vh] bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <p className="my-2 text-lg ">{shortDescription}.</p>
    <div className="card-actions ">
      <button className="btn btn-outline text-sky-500 w-full">ADD TO CART</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetail;