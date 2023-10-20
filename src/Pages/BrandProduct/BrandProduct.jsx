

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { Slide } from "react-toastify";
import Slider from "./Slider";
// import Product from "./Product";



const BrandProduct = () => {
    const { brandName } = useParams()

    const [products, setProducts] = useState([])
    // const [getProducts, setGetProducts] = useState([])
    useEffect(() => {
        fetch('https://digital-store-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const loadedProduct = products.filter(product => product.brandName.toLowerCase() === brandName.toLowerCase())
    console.log(loadedProduct)

    return (
        <div>
            <Slider></Slider>
            <h2 className="text-center text-4xl font-semibold my-10">Type of Vehicles of Our Brand <span className="text-pink-500">{brandName}</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-20 ">
                {
                    loadedProduct.map((product, index) => <Product key={index} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default BrandProduct;