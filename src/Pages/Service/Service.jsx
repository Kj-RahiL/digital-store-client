import { useEffect, useState } from "react";
import background from '../../assets/bg.png'
import { FaArrowCircleRight,} from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="py-20 bg-cover bg-pink-50" style={{ backgroundImage: `url(${background})` }}>
            <h2 className="text-center text-5xl font-bold mb-8 uppercase">Repair your car</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                {
                    services.map(service => <div key={service.service_id} className="card w-full shadow-md shadow-pink-500">
                        <figure className="h-[300px]"><img className="h-full w-full" src={service.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.service_name}</h2>
                            <div className="flex justify-between items-center">
                                <h2><strong>Price:</strong> $ {service.price}</h2>
                                <Link to={`/checkoutService/${service._id}`}>
                                <button className="btn bg-pink-500 text-white hover:bg-transparent hover:text-black hover:border-pink-400">more<FaArrowCircleRight></FaArrowCircleRight></button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;