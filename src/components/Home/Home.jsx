import Banner from "./Banner";
import Gallery from "./Gallery";
import NewArrival from "./NewArrival";
import Newsletter from "./Newsletter";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
            <NewArrival />
            <ShopByCategory />
            <Newsletter />
            <Gallery />

            
            
            </div>
        </div>
    );
};

export default Home;