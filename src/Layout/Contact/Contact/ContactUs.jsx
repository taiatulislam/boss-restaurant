import Banner from '../../../Components/Banner';
import SectionTitle from '../../../Components/SectionTitle';
import img from '../../../assets/contact/banner.jpg'
import { FaPhoneVolume, FaLocationDot, FaRegClock, FaRegPaperPlane } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div>
            <Banner
                cover={img}
                title="CONTACT US"
                description="Would you like to try a dish?"
            ></Banner>

            <SectionTitle
                subHeading="Visit Us"
                heading="OUR LOCATION"
            ></SectionTitle>

            {/* Contact Card */}
            <div className='max-w-7xl mx-auto text-center grid grid-cols-3 gap-7 mb-10'>
                <div className='border-2 border-base-300'>
                    <div className='bg-[#D1A054] p-6'>
                        <FaPhoneVolume className='text-white text-2xl mx-auto' />
                    </div>
                    <div className='bg-base-300 mx-10 mb-10 py-10'>
                        <p className='font-bold'>PHONE</p>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='border-2 border-base-300'>
                    <div className='bg-[#D1A054] p-6'>
                        <FaLocationDot className='mx-auto text-white text-2xl' />
                    </div>
                    <div className='bg-base-300 mx-10 mb-10 py-10'>
                        <p className='font-bold'>ADDRESS</p>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className='border-2 border-base-300'>
                    <div className='bg-[#D1A054] p-6'>
                        <FaRegClock className='mx-auto text-white text-2xl' />
                    </div>
                    <div className='bg-base-300 mx-10 mb-10 py-10'>
                        <p className='font-bold'>WORKING HOURS</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>

            <SectionTitle
                subHeading="Send Us a Message"
                heading="CONTACT FORM"
            ></SectionTitle>
            {/* Contact Form */}
            <div className='max-w-7xl mx-auto bg-base-300 py-10 mb-20'>
                <form className='px-20'>
                    <div className='flex gap-5'>
                        <label className='w-1/2'>
                            Name*
                            <input type="text" name="name" placeholder='Enter Your Name' className='w-full pl-5 py-4 rounded-md my-3' />
                        </label>
                        <label className='w-1/2'>
                            Email*
                            <input type="email" name="email" placeholder='Enter Your Email' className='w-full pl-5 py-4 rounded-md my-3' />
                        </label>
                    </div>
                    <label>
                        Phone*
                        <input type="number" name="phone" placeholder='Enter Your Phone Number' className='w-full pl-5 py-4 rounded-md my-3' />
                    </label>
                    <label>
                        Message*
                        <textarea name="message" placeholder='Write Your Message Here' rows={10} className='w-full pl-5 rounded-md mt-3' />
                    </label>
                    <div className='text-center my-5'>
                        <button className='btn normal-case text-white bg-gradient-to-r from-[#835D23] to-[#B58130]'>Send Message <FaRegPaperPlane /></button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default ContactUs;