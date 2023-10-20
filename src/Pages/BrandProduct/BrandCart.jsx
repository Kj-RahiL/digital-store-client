
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

// onClick={() => handleBrandCart(brand.brandName)}


//
// const [name, setName] = useState('')
// const [products, setProducts] = useState([])
// const [getProducts, setGetProducts] = useState([])
// useEffect(() => {
//     fetch('https://digital-store-server.vercel.app/product')
//         .then(res => res.json())
//         .then(data => setProducts(data))
// }, [])


// console.log(products)
// console.log(getProducts)

// const handleBrandCart = name => {
//     const brandName = name.toLowerCase()

//     console.log('handle name brand ', brandName)
//     const loadedProduct = products.filter(product => product.brandName.toLowerCase() === brandName)
//     console.log(loadedProduct)
//     setGetProducts(loadedProduct);
//     // console.log('getProducts:', getProducts);

// }

// useEffect(() => {
//     console.log('getProducts:', getProducts);
// }, [getProducts])
// console.log(getProducts) 
// here getProducts is null

//