import { Link } from "react-router-dom";


const LogIn = () => {
    return (
        <div className="hero card bg-base-200">

            <div className=" card w-full max-w-sm shadow-2xl bg-base-100">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign In!</h1>

                </div>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gray-400">Login</button>

                    </div>
                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Already have an account?
                        <Link
                            className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                            to='/signUp'
                        >
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    );
};

export default LogIn;