
import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const {_id, name, brandName, category, image, price, rating } = product
    console.log(product?._id)
    return (
        <div>
            <div className="card card-compact bg-base-300 ">
                <figure className="h-60"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <h2 className="font-semibold text-3xl">{name}</h2>
                    <div className="flex justify-between text-xl font-light text-gray-500">
                        <h2 className="">Brand: {brandName}</h2>
                        <h2 className="">Type: {category}</h2>
                    </div>
                    <div className="flex justify-between text-lg font-normal text-gray-500" >
                        <p>Price:{price}</p>
                        <div>
                            <p>Rating: <span className="text-pink-600">{rating}</span>/5</p>


                        </div>
                    </div>
                    <div className="card-actions justify-end text-black">
                        <Link to={`/details/${_id}`}>
                            <button className="btn normal-case mr-5 hover:bg-[#FF3737] hover:text-white bg-transparent  border-2">Details</button>
                        </Link>
                        <button className="btn normal-case hover:bg-[#FF3737] hover:text-white bg-transparent  border-2">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;