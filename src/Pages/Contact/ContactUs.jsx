import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="bg-white ">
            <div className="flex flex-col md:flex-row mx-4 lg:mx-20 justify-center text-white py-20  gap-10">
                <div className="card w-full md:w-1/2 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src='https://i.ibb.co/CtW3qKz/blurry-gradient-haikei.png' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="text-2xl font-medium text-white">Get in Touch With Us!</h2>
                        <p className="text-white">Ask questions, schedule a meeting or request a proposal. Let’s Get Started</p>
                        <div className="card-actions justify-center">
                          <Link to='/contact'>  <button className="btn bg-transparent border-white text-white hover:bg-[#26234af2]">Contact US Now</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card  md:w-1/2 h-60 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src='https://i.ibb.co/P5TjkJz/blurry-gradient-haikei-1.png' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-white text-2xl font-medium">Do You want To Work With Us!</h2>
                        <p className="text-white">If you are talented enough than you can join our team and have a bright future</p>
                        <div className="card-actions justify-center">
                            <Link to='/'><button className="btn bg-transparent border-white text-white hover:bg-[#18362af2]">Join Our Team</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;