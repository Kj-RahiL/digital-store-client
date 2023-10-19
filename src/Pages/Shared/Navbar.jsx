import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log('navbar photo' ,user?.photoURL)
    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('sign out successfully')
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const link = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                    
                };
            }}

        >Home</NavLink></li>
        <li><NavLink to="/addProduct"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}
        >Add Product</NavLink></li>

        <li><NavLink to="/myCart"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}
        >My Cart</NavLink></li>

        <li><NavLink to="/blogs"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}
        >Blog</NavLink></li>

        <li><NavLink to="/contact"
            style={({ isActive }) => {
                return {
                    color: isActive? '#ff3837' : '',
                    borderBottom: isActive ? "2px solid #ff3837" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Contact</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
               <Link to='/' className="h-20"><img className="w-full h-full " src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                        {
                            user ? <img src={user?.photoURL} alt="" />
                            :
                            <img src="https://i.ibb.co/5M5pv2P/icons8-avatar-48.png" alt="" />
                        }
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-ghost">SignOut</button>
                        :
                        <Link to='/login' className="btn btn-ghost">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;