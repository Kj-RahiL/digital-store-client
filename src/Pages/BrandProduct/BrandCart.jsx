
import { Link } from "react-router-dom";


const BrandCart = ({ brand }) => {
    const { brandName, image} = brand
    // console.log( brandName, image)
    

    return (
        <Link to={`/brandProduct/${brandName}`}>
            <div 
                className="card bg-slate-200 hover:bg-white hover:cursor-pointer my-3">
                <figure><img className="h-32" src={image} alt="Shoes" /></figure>
                <div className=" mt-5">
                    <h2 className="font-semibold text-xl text-gray-700 text-center py-2">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

export default BrandCart;
