import { useLoaderData } from "react-router-dom";
import BrandItem from "../BrandItem/BrandItem";


const Brand = () => {
    const brand=useLoaderData();
    const images=brand.map(img=>img.image)
    console.log(images);
    if(brand.length<1){
        return (
            <img src="https://i.ibb.co/vmPq470/2953962-1.jpg"></img>
        )
    }
    return (
        <div>
        <div className="">
        <div className="carousel w-full h-[60vh]  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src={images[0]} className="w-full object-fit " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={images[1]} className="w-full object-fit " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={images[2]} className="w-full object-fit " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
        <div className=" max-w-4xl mx-auto ">
        <h2 className="text-center text-4xl font-bold my-8">Products</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 my-10">
           {
                brand.map(brandItem=><BrandItem key={brandItem._id} brandItem={brandItem}></BrandItem>)
            }
           </div>
        </div>
        </div>
    );
};

export default Brand;