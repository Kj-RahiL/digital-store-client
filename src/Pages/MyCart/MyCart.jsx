import { useLoaderData } from "react-router-dom";
import CardCart from "./CardCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const MyCart = () => {
    const products = useLoaderData()
    const {user} = useContext(AuthContext)

    const [carts, setCarts] = useState(products)

    useEffect(()=>{
        const userCarts = products.filter(product => product.email == user.email) 
        setCarts(userCarts)

    },[])

    console.log(carts)

    // const [carts, setCarts] = useState(products)


    
    return (

        <div className="overflow-x-auto mx-5 lg:mx-20 card-body ">
            <table className="table rounded-lg">
                {/* head */}
                <thead className="bg-amber-800 text-white font-semibold text-xl text-center">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Type</th>
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