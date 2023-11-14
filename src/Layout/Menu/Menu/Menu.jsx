import Banner from "../../../Components/Banner";
import CategoryBanner from "../../../Components/CategoryBanner";
import SectionTitle from "../../../Components/SectionTitle";
import img from '../../../assets/menu/banner3.jpg'
import desert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    return (
        <div>
            <Banner
                cover={img}
                title="OUR MENU"
                description="Would you like to try a dish?"
            ></Banner>
            <SectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>



            {/* Desert section */}
            <CategoryBanner
                bgImage={desert}
                title="DESSERTS"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></CategoryBanner>
            <CategoryBanner
                bgImage={pizza}
                title="PIZZAS"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></CategoryBanner>
            <CategoryBanner
                bgImage={salad}
                title="SALADS"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></CategoryBanner>
            <CategoryBanner
                bgImage={soup}
                title="SOUPS"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></CategoryBanner>
        </div>
    );
};

export default Menu;