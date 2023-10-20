import Banner from "../Banner/Banner";
import Faq from "../FAQ/Faq";
import Products from "../Products/Products";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
            <Products></Products>
            <Faq></Faq>
        </div>
    );
};

export default Home;