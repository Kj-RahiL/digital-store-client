import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const product = useLoaderData()
    const { name, category, image, price, details } = product

    const handleMycart = e =>{
        e.preventDefault()

        fetch('https://digital-store-server-b5c0xcwlh-rahis-projects.vercel.app/myCart',{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                title: 'Success!!',
                text: 'Add a Coffee Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        })
      console.log(product)
    }
    return (
        <div className="max-w-xl mx-auto px-2 py-20">
            <div className="card md:card-side card-compact bg-base-300  ">
                <figure className="h-60 w-full md:w-1/2"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-2 w-full md:w-1/2">
                    <h2 className="font-semibold text-3xl">{name}</h2>
                    <div className="flex justify-between text-xl font-light text-gray-500">
                        <h2 className="">{category}</h2>
                        <h2>{price}</h2>
                    </div>
                    <div className="flex justify-between text-lg font-normal text-gray-500" >
                        <p>{details}</p>
                        
                    </div>
                    <div className="card-actions justify-end ">
                        {/* <Link to={`/myCart`}> */}
                            <button onClick={handleMycart} className="btn normal-case hover:text-black bg-[#FF3737] text-white hover:bg-transparent  border-2">Add to Cart</button>
                        {/* </Link> */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;