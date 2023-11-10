import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";

const PopularMenu = () => {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => (item.category === 'popular'))
                setMenus(popular)
            })
    }, [])

    return (
        <section className="max-w-7xl mx-auto my-10">
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'>
            </SectionTitle>
            <div className="grid grid-cols-2 gap-5">{
                menus.map(item => <div key={item._id} className="flex gap-3">
                    <div>
                        <img src={item.image} alt="food" className="w-[80px] h-[80px] rounded-r-full rounded-bl-full" />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="uppercase">{item.name} ------------------</p>
                            <p className="text-[#BB8506]">${item.price}</p>
                        </div>
                        <p className="mt-2 text-sm">{item.recipe}</p>
                    </div>
                </div>)
            }
            </div>
            <div className="text-center mt-10">
                <button className="btn border-b-[5px] bg-white border-[#1F2937]">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;