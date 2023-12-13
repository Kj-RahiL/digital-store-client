<div className="card shadow-md my-16">
                <form onSubmit={handleCheckout} className="card-body">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" 
                            name="name"
                            defaultValue={user?.displayName} 
                            placeholder="Name" 
                            className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" 
                             name="date"
                            placeholder="Date" 
                            className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" 
                             name="email"
                            defaultValue={user?.email} 
                            placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text"
                             name="price"
                             defaultValue={"$ "+ service?.price} 
                             placeholder="price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full h-24" name="message" placeholder="Your message"></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className=" form-control btn btn-outline w-full text-white normal-case bg-[#FF3811]">Order Confirm</button>
                    </div>


                </form>
            </div>