import { Link } from "react-router-dom";


const SignUp = () => {
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,password,email)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
                
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                <div className="text-center my-5">
                    <h1 className="text-5xl text-pink-500 font-bold">Sign Up!</h1>

                </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-500 hover:text-gray-800 text-white">Login</button>
                        </div>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Already have an account?
                            <Link
                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                to='/login'
                            >
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
        </div>
    );
};

export default SignUp;