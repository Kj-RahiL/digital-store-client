import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const ServiceCheckOut = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    console.log(service)
    console.log(user.email)

    const handleCheckout = (e) =>{
        e.preventDefault()
        const from = e.target 
        const name = from.name.value
        const date = from.date.value
        const email = from.email.value
        const price = from.price.value
        const details = from.message.value
        const bookings = {
          customerName: name,
          service_title: service.title,
          date,
          email,
          img: service.img,
          price,
          service_id: service._id,
          details
        }
    }
    return (
        <div className="py-10 px-2 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="mx-auto card w-full shadow">
                <figure className="h-[300px]"><img className="h-full w-full" src={service.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.service_name}</h2>
                    <div className="flex justify-between items-center">
                        <h2><strong>Price:</strong> $ {service.price}</h2>
                        <h2><strong>Duration:</strong> {service.duration_hours}hrs</h2>
                    </div>
                    <p>{service.description}</p>
                </div>
            </div>
            <div className="card shadow-md">
                <form onSubmit={handleCheckout} className="card-body">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                value={user?.displayName}
                                placeholder="Name"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date"
                                name="date"
                                placeholder="Date"
                                className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                value={user?.email}
                                placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text"
                                name="price"
                                value={"$ " + service?.price}
                                placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full h-24" name="message" placeholder="Your message"></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className=" form-control btn btn-outline w-full text-white normal-case bg-[#FF3811]">Order Confirm</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default ServiceCheckOut;