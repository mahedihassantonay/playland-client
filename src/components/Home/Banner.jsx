import banner from '../../assets/4.jpg'
const Banner = () => {
    return (
        <div className='relative w-full object-cover'>
            
            <img src={banner} alt="" />
            
            <div className='invisible lg:visible absolute w-3/6 top-1/3 left-1/4 text-center text-white bg-black xl:p-16 backdrop-brightness-50 bg-white/10 tracking-widest rounded-lg overflow-hidden'>
                <h1 className='text-4xl font-bold py-4'>Destination for Endless Toy Delights</h1>
                <p className='text-gray-300 '>Welcome to Playland, the ultimate destination for toy enthusiasts of all ages! Immerse yourself in a world of endless joy and excitement as you explore our vast collection of toys, games, and playtime essentials. From nostalgic classics to the latest trends, we offer a diverse range of high-quality products that spark imagination and inspire creativity.</p>
            </div>

            
        </div> 
    );
};

export default Banner;