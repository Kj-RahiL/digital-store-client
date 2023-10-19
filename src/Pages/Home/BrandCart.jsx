import { useParams } from "react-router-dom";


const BrandCart = ({brand}) => {
    const brandProduct = useParams
    const handleBrandCart = name =>{
        console.log('handle name brand ',name.toLowerCase())
    }
    return (
        <div onClick={()=>handleBrandCart(brand.brandName)}
                        className="card hover:bg-white hover:cursor-pointer">
                            <figure><img className="h-32" src={brand.image} alt="Shoes" /></figure>

                        </div>
    );
};

export default BrandCart;