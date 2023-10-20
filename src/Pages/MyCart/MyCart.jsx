import { useLoaderData } from "react-router-dom";
import CardCart from "./CardCart";


const MyCart = () => {
    const products = useLoaderData()
    console.log(products)
    return (

        <div className="overflow-x-auto mx-5 lg:mx-20 card-body ">
            <table className="table rounded-lg">
                {/* head */}
                <thead className="bg-amber-600 text-white font-semibold text-xl text-center">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Type</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody className="bg-gray-400">
                    
                        {
                            products.map((cart, index) => <CardCart key={index} cart={cart} ></CardCart>)
                        }
                 

                </tbody>


            </table>
        </div>



    );
};

export default MyCart;