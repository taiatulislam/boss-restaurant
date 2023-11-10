import chef from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='max-w-7xl mx-auto p-20' style={{
            backgroundImage: `url(${chef})`
        }}>
            <div className='bg-white max-w-3xl mx-auto text-center p-16'>
                <h2 className='text-4xl font-semibold mb-3'>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;