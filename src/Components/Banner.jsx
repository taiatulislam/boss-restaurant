import PropTypes from 'prop-types';

const Banner = ({ cover, title, description }) => {
    return (
        <div className='h-screen flex justify-center items-center' style={{
            backgroundImage: `url(${cover})`
        }}>
            <div className='bg-black text-white bg-opacity-50 w-3/4 text-center p-20'>
                <h2 className='text-6xl font-semibold mb-3'>{title}</h2>
                <p className='text-2xl'>{description}</p>
            </div>
        </div>
    );
};

Banner.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};

export default Banner;