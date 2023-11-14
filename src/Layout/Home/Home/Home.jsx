import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Contact from "../Contact/Contact";
import FromMenu from "../FromMenu/FromMenu";
import PopularMenu from "../PopularMenu/PopularMenu";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <FromMenu></FromMenu>
        </div>
    );
};

export default Home;