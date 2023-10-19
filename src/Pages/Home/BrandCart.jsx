// import { useParams } from "react-router-dom";


const BrandCart = ({ brand }) => {
    // const brandProduct = useParams()
    const handleBrandCart = name => {
        console.log('handle name brand ', name.toLowerCase())
    }
    return (
        <div onClick={() => handleBrandCart(brand.brandName)}
            className="card bg-slate-200 hover:bg-white hover:cursor-pointer my-3">
            <figure><img className="h-32" src={brand.image} alt="Shoes" /></figure>
            <div className=" mt-5">
                <h2 className="font-semibold text-xl text-gray-700 text-center py-2">{brand.brandName}</h2>
            </div>
        </div>
    );
};

export default BrandCart;