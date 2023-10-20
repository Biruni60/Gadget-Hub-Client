import {PropTypes} from 'prop-types'

const TrendingDetail = ({product}) => {
    const {image,name,rating,price}=product
    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
   <div className='flex'>
   <p className='text-sky-500'><span className='text-lg font-medium'>Price: </span>${price}</p>
    <p className='text-sky-500'><span className='text-xl font-medium'>Rating: </span>{rating}</p>
   </div>
  </div>
</div>
        </div>
    );
};
TrendingDetail.propTypes={
    product:PropTypes.object
}
export default TrendingDetail;