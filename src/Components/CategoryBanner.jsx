import PropTypes from 'prop-types';

const CategoryBanner = ({ bgImage, title, subTitle }) => {
    return (
        <div className='h-[70vh] flex justify-center items-center' style={{
            backgroundImage: `url(${bgImage})`
        }}>
            <div className='bg-black text-white bg-opacity-50 w-3/4 text-center p-20'>
                <h2 className='text-4xl font-semibold mb-3'>{title}</h2>
                <p className=''>{subTitle}</p>
            </div>
        </div>
    );
};

CategoryBanner.propTypes = {
    bgImage: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string
};

export default CategoryBanner;