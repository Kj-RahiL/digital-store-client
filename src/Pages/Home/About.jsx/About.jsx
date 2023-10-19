import { FaBusinessTime } from "react-icons/fa";
import { SlLike } from "react-icons/sl";

const About = () => {
    return (
        <div >
            <h2 className="text-center text-4xl my-16 font-semibold">About RentCar</h2>
            <div className="grid md:grid-cols-2">
                <div><img className="w-full" src="https://i.ibb.co/PgY3bRW/green-gmc-sierra-pickup-truck-driving-dirt-road-with-mountains-background.jpg" alt="" /></div>
                <div className="card-body space-y-3">
                    <h2 className="text-2xl font-semibold">We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.</h2>
                    <p className="text-gray-500 ">RentCar is nisi aliquip consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor sit amt consectetur adipisicing elit sed eiusmod tempor incididuntu labore et dolore magna aliqua enimad minim veniam quis nostrud area exercitation ullamco laboris nisi aliquip. Freebet Slot Duis aute irure dolor in reprehenderitn voluptate velit ese cillum dolore fugiat free chip nulla pariatur excepteur sint occaecat cupidatat non proident.</p>
                    <div className="flex items-center gap-5">
                        <span className="text-3xl" ><FaBusinessTime></FaBusinessTime></span>
                        <div>
                            <h2 className="text-xl font-semibold">10 Years in Business</h2>
                            <p className="text-sm text-gray-500">Vehicles is nisi aliquip consequat duis velit</p>
                            </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-3xl"><SlLike></SlLike></span>
                        <div>
                            <h2 className="text-xl font-semibold">Trusted & Genuine Parts</h2>
                            <p className="text-sm text-gray-500">Autos Drive is nisi aliquip consequat duis ted</p>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;