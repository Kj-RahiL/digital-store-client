

const Banner = () => {
    return (
        <div className="hero min-h-screen flex" style={{ backgroundImage: 'url(https://i.ibb.co/Bz1DnqX/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 ">
            </div>
            <div className="hero-content text-center text-neutral-content justify-end md:mr-12">   
                <div className="md:max-w-3xl ">
                    <h1 className="mb-5 text-sm md:text-xl font-bold text-[#FF3737]">__Make Up your mind!</h1>
                    <h1 className="mb-5 text-xl md:text-3xl text-white font-bold">Buy the car you have always dreamed!!</h1>
                    <p className="mb-5 text-xs md:text-base text-gray-300">Super car also referred to as a n exotic is a luxury, high performance sports car or grand tourer.</p>
                    <button className="btn bg-[#FF3737]  normal-case text-white hover:bg-transparent hover:border-[#f62d66] hover:border-2">Read more</button>
                    <button className="btn bg-[#201e1e]  normal-case text-white mt-2 md:ml-5 hover:bg-transparent hover:border-[#fd2d2d] hover:border-2 ">About Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;