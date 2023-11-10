import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center mb-10'>
            <p className='text-[#D99904] mb-5'>---{subHeading}---</p>
            <h2 className='text-3xl border-y-[3px] border-[#E8E8E8] inline py-3'>{heading}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
};

export default SectionTitle;