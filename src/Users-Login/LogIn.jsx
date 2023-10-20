import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const LogIn = () => {
    const { signInUser, googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(password, email)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success',
                    text: 'User Log In Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
                  form.reset('')
                  navigate(location?.state? location.state :'/')
            })
            .catch(error => {
                console.error(error);
                toast.error("Oops!! password or email doesn't match. please valid password or email" );
            })

    }

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            console.log('from login',result.user)
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div className="hero card bg-base-200">

            <div className=" card w-full max-w-sm shadow-2xl bg-base-100">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign In!</h1>

                </div>
                <form onSubmit={handleLogIn} className="card-body">
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
                        <button className="btn bg-gray-400">Sig In</button>

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
                <div className="flex mb-3 items-center justify-evenly">
                    <hr className="w-2/5 border" />
                    <span className="text-base font-medium">or</span>
                    <hr className="w-2/5 border" />
                    
                </div>
                <div className="space-y-3 mb-10">
                    <div onClick={handleGoogleLogin}>
                        <h2 className="flex justify-center btn text-xl font-medium"><FcGoogle></FcGoogle> Google</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;