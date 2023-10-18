

const Banner = () => {
    return (
        <div className="hero min-h-screen flex" style={{ backgroundImage: 'url(https://i.ibb.co/Bz1DnqX/banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 ">
            </div>
            <div className="hero-content text-center text-neutral-content justify-end mr-12">
                
                <div className="max-w-3xl ">
                    <h1 className="mb-5 text-xl font-bold text-[#FF3737]">__Make Up your mind!</h1>
                    <h1 className="mb-5 text-3xl text-white font-bold">Buy the car you have always dreamed!!</h1>
                    <p className="mb-5 text-gray-300">Super car also referred to as a n exotic is a luxury, high performance sports car or grand tourer.</p>
                    <button className="btn bg-[#FF3737] text-white hover:bg-transparent hover:border-[#f62d66] hover:border-2">read more</button>
                    <button className="btn bg-[#201e1e] text-white ml-5 hover:bg-transparent hover:border-[#fd2d2d] hover:border-2 ">about Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;