import { useLoaderData } from "react-router-dom";
import CardCart from "./CardCart";
import { useState } from "react";


const MyCart = () => {
    const products = useLoaderData()

    const [carts, setCarts] = useState(products)
    console.log(products)
    return (

        <div className="overflow-x-auto mx-5 lg:mx-20 card-body ">
            <table className="table rounded-lg">
                {/* head */}
                <thead className="bg-amber-800 text-white font-semibold text-xl text-center">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Remove</th>

                    </tr>
                </thead>
                <tbody className="bg-gray-400">
                    
                        {
                            carts.map((cart, index) => <CardCart 
                            key={index}
                            cart={cart}
                            carts={carts}
                            setCarts={setCarts}
                            
                            ></CardCart>)
                        }
                 

                </tbody>


            </table>
        </div>



    );
};

export default MyCart;