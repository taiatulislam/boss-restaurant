import Banner from "../../../Components/Banner";
import img from '../../../assets/shop/banner2.jpg'

const Shop = () => {
    return (
        <div>
            <Banner
                cover={img}
                title="OUR SHOP"
                description="Would you like to try a dish?"
            ></Banner>
        </div>
    );
};

export default Shop;