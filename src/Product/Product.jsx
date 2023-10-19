import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
 
 const Product = ({product}) => {
    const {image,brand_name}=product
    return (
        <Link to={`/products/${brand_name}`}>
            <div>
        <div className="card h-96 bg-base-100 shadow-xl p-4">
  <figure className='h-full'><img src={image}/></figure>
  <div className="card-body">
    <h2 className='text-2xl font-semibold'>{brand_name}</h2>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
        </div>
        </Link>
    );
 };
 Product.propTypes={
    product:PropTypes.object
 }
 export default Product;