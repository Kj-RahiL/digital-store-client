import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const product = useLoaderData()
    const {_id, name, brandName, category, image, price, rating, details } = product

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const brandName = form.brandName.value
        const category = form.category.value
        const price = form.price.value
        const image = form.image.value
        const rating = form.rating.value
        const details = form.details.value
        const product = {name, brandName, category, price, image, rating, details}

        fetch(`https://digital-store-server-aqarlthqi-rahis-projects.vercel.app/updateProduct/${_id}`,{
            method:"PUT",
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
              form.reset('')
        })
      console.log(product)
    }
    return (
        <div className="w-3/4 mx-auto  px-20 py-5 bg-[#f3c89697] card">
            <div className="space-y-2">
                <h2 className="text-3xl text-center py-5 font-bold underline text-[#ff3837]">Update Product</h2>
            </div>
            <form onSubmit={handleAddProduct} >
                {/* Name and Band Name row */}
                <div className="md:flex mb-8 ">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Enter Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Brand Name</span>
                        </label>
                        <select name="brandName" defaultValue={brandName} className="select select-bordered">
                            <option disabled selected>Pick Brand Name</option>
                            <option>Toyota</option>
                            <option>Ford</option>
                            <option>BMW</option>
                            <option>Honda</option>
                            <option>Mercedes-Benz</option>
                            <option>Audi</option>
                        </select>
                    </div>
                </div>
                {/* category and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Enter brand category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Enter category price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* photo and rating row  */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" 
                            defaultValue={image}
                            placeholder="Enter category image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" 
                            defaultValue={rating}
                            placeholder="Enter category rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* details */}
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text text-xl font-medium text-[#63433f]">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details"  
                        defaultValue={details} 
                        placeholder="Enter category details" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className="btn btn-block normal-case hover:text-black bg-[#fa9379] text-[#f9ede2]" type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default Update;