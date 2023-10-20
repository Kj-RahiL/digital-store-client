import { Link, useLoaderData } from "react-router-dom";


const Details = () => {
    const product = useLoaderData()
    const {_id, name, category, image, price, details } = product
    console.log(product)
    return (
        <div className="max-w-xl mx-auto py-20">
            <div className="card card-side card-compact bg-base-300  ">
                <figure className="h-60 w-1/2"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-2 w-1/2">
                    <h2 className="font-semibold text-3xl">{name}</h2>
                    <div className="flex justify-between text-xl font-light text-gray-500">
                        <h2 className="">{category}</h2>
                        <h2>{price}</h2>
                    </div>
                    <div className="flex justify-between text-lg font-normal text-gray-500" >
                        <p>{details}</p>
                        
                    </div>
                    <div className="card-actions justify-end ">
                        <Link to={`/details/${_id}`}>
                            <button className="btn normal-case hover:text-black bg-[#FF3737] text-white hover:bg-transparent  border-2">Add to Cart</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;