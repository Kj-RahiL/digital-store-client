import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Pages/Shared/Footer";


const Root = () => {
    return (
        <div>
            <div className="md:mx-10"><Navbar></Navbar></div>
            <div className="bg-[#f4f3f0cd]">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;