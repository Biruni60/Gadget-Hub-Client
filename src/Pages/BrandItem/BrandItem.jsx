import {PropTypes} from "prop-types"
import { Link } from "react-router-dom";

const BrandItem = ({brandItem}) => {
    const {_id,image,name,brandName,type,price,rating}=brandItem;

    return (
        <div>
        <div className="card h-full glass">
  <figure className=""><img className="h-64 w-full" src={image}/></figure>
  <div className="card-body grid grid-cols-2 ">
        <p className="text-xl col-span-2 font-semibold">{name}</p>
        <p><span className="text-lg font-medium">Brand: </span> {brandName}</p>
        <p><span className="text-lg font-medium">Type: </span>{type}</p>
         <p><span className="text-lg font-medium">Price: </span>${price}</p>
     <p><span className="text-lg font-medium" >Rating: </span>{rating}</p>
    <div className="card-actions">
      <div className="flex gap-24 my-4 ">
      <Link to={`/brand/${_id}`}><button className="btn btn-outline text-sky-500 ">View Detail</button></Link>
      <Link to={`/update/${_id}`}><button className="btn btn-outline text-sky-500">Update</button></Link>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};
BrandItem.propTypes={
    brandItem:PropTypes.object
}
export default BrandItem;