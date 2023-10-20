import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";
import Products from "../Products/Products";
import Trending from "../Trending/Trending";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
            <Products></Products>
            <Trending></Trending>
            <Faq></Faq>
        </div>
    );
};

export default Home;