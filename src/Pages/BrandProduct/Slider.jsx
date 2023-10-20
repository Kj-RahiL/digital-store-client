

const Slider = () => {
    return (
        <div className="carousel w-full h-[85 vh]">
            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative w-full h-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/1TwRgSC/pexels-maria-geller-2127039.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content justify-end mr-12">

                        <div className="max-w-3xl ">
                            <h1 className="mb-5 text-xl uppercase font-bold text-[#FF3737]">__Get your dream car</h1>
                            <h1 className="mb-5 text-4xl text-white font-bold">Lexus M12 2023!!</h1>
                            <p className="mb-5 text-gray-200">Fresh Style Performance.</p>
                            <button className="btn normal-case hover:bg-[#FF3737] text-white bg-transparent  hover:border-2">read more</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RCkFTwx/lance-asper-Wl6-Oe-SGy-Of4-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl ">
                            <h1 className="mb-5 text-xl uppercase font-bold text-[#FF3737]">__Get your dream car</h1>
                            <h1 className="mb-5 text-4xl text-white font-bold">Audi R8 Marine!!</h1>
                            <p className="mb-5 text-gray-200">Fresh Style Performance.</p>
                            <button className="btn normal-case hover:bg-[#FF3737] text-white bg-transparent  hover:border-2">read more</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/54mdytw/pexels-vlad-alexandru-popa-1402787.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl ">
                            <h1 className="mb-5 text-xl uppercase font-bold text-[#FF3737]">__Get your dream car</h1>
                            <h1 className="mb-5 text-4xl text-white font-bold">Lexus M12 2023!!</h1>
                            <p className="mb-5 text-gray-200">Fresh Style Performance.</p>
                            <button className="btn normal-case hover:bg-[#FF3737] text-white bg-transparent  hover:border-2">read more</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide-4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/CMPLKmJ/pexels-neil-kelly-712618.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl ">
                            <h1 className="mb-5 text-xl uppercase font-bold text-[#FF3737]">__Get your dream car</h1>
                            <h1 className="mb-5 text-4xl text-white font-bold">Lexus M12 2023!!</h1>
                            <p className="mb-5 text-gray-200">Fresh Style Performance.</p>
                            <button className="btn normal-case hover:bg-[#FF3737] text-white bg-transparent  hover:border-2">read more</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;