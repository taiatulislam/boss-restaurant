import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
    return (
        <section className='max-w-7xl mx-auto my-20'>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}>
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide>
                    <img src={slide1} alt="food" className="w-full" />
                    <h3 className='text-3xl text-white text-center -mt-10'>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="food" className="w-full" />
                    <h3 className='text-3xl text-white text-center -mt-10'>PIZZAS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="food" className="w-full" />
                    <h3 className='text-3xl text-white text-center -mt-10'>SOUPS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="food" className="w-full" />
                    <h3 className='text-3xl text-white text-center -mt-10'>DESERTS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="food" className="w-full" />
                    <h3 className='text-3xl text-white text-center -mt-10'>SALADS</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;