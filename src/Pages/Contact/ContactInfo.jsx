import { BsHouseAdd, BsMailbox, BsPhone, } from "react-icons/bs";

const ContactInfo = () => {
    return (
        <div className="bg-white">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-20 justify-center text-white py-20  gap-10">
                <div className="card w-1/2 h-32 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src='https://i.ibb.co/CtW3qKz/blurry-gradient-haikei.png' alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="w-60"><BsHouseAdd ></BsHouseAdd></h2>
                        <h2 className="text-2xl font-medium text-white">Address</h2>
                        <p className="text-white">38-2 Hilton Street, Chittagong</p>
                    </div>
                </div>

                <div className="card w-1/2  h-32 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src='https://i.ibb.co/P5TjkJz/blurry-gradient-haikei-1.png' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="w-60"><BsPhone></BsPhone></h2>
                        <h2 className="text-white text-2xl font-medium">Phone</h2>
                        <p className="text-white">(+01) 123 456 7890</p>
                    </div>
                </div>

                <div className="card w-1/2 h-32 bg-base-100 shadow-xl image-full">
                    <figure><img className="w-full" src='https://i.ibb.co/CtW3qKz/blurry-gradient-haikei.png' alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="w-60"><BsMailbox></BsMailbox></h2>
                        <h2 className="text-white text-2xl font-medium">Email</h2>
                        <p className="text-white">inform@dvents.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;