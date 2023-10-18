

const AddProduct = () => {
    const handleAddProduct = e =>{
        e.preventDefault()
        console.log('from add product')
    }
    return (
        <div className="w-3/4 mx-auto  px-20 py-5 bg-[#f4edebe8] card">
            <div className="space-y-2">
                <h2 className="text-3xl text-center py-5 font-bold text-[#ff3837]">Add New Product</h2>
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
                                placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="brand-name" placeholder="Enter Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* category and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter brand category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Enter category price" className="input input-bordered w-full" />
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
                            <input type="text" name="image" placeholder="Enter category image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text text-xl font-medium text-[#63433f]">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Rating" placeholder="Enter category rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* details */}
                <div className="form-control w-full mb-8">
                    <label className="label">
                        <span className="label-text text-xl font-medium text-[#63433f]">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Enter category details" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className="btn btn-block normal-case hover:text-black bg-[#fa9379] text-[#f9ede2]" type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;