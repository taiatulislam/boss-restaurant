import SectionTitle from "../../../Components/SectionTitle";
import menu from '../../../assets/home/featured.jpg'

const FromMenu = () => {
    return (
        <section className="max-w-7xl mx-auto my-10" style={{
            backgroundImage: `url(${menu})`,
            backgroundPosition: 'center center',
        }}>
            <div className="bg-[#1515157a] p-10">
                <div className="mt-10">
                    <SectionTitle
                        subHeading='Check it out'
                        heading='FROM OUR MENU'>
                    </SectionTitle>
                </div>
                <div className="flex gap-10 max-w-5xl mx-auto p-16">
                    <div className="w-1/2">
                        <img src={menu} alt="food" className="" />
                    </div>
                    <div className="w-1/2 text-white">
                        <p>March 20, 2023</p>
                        <p>WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn border-b-[5px] border-white bg-transparent text-white mt-4">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FromMenu;