import { GiFilmSpool, GiSteeringWheel } from "react-icons/gi";
import About from "./About";
const AboutUs = () => {
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold my-10">Our Advantages</h2>
            <div className="grid lg:grid-cols-3 gap-5 mx-10 md:mx-20">
                <div className="card card-compact bg-base-100 shadow-xl">
                    <h2 className="text-8xl mx-auto py-6"><GiSteeringWheel></GiSteeringWheel></h2>
                    <div className="card-body">
                        <h2 className="card-title">Largest Dealership</h2>
                        <p>We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.</p> 
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <h2 className="text-8xl mx-auto py-6"><GiFilmSpool></GiFilmSpool></h2>
                    <div className="card-body">
                        <h2 className="card-title">Multipoint Safety</h2>
                        <p>We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.</p> 
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <h2 className="text-8xl mx-auto py-6"><GiSteeringWheel></GiSteeringWheel></h2>
                    <div className="card-body">
                        <h2 className="card-title">Lower Car Prices</h2>
                        <p>We offer high quality vehicles at unbelievable prices & creates pleasant buying experience.</p> 
                    </div>
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default AboutUs;