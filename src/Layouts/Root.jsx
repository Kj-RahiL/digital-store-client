import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div>
            <div className="mx-10"><Navbar></Navbar></div>
            <div className="bg-[#f4f3f0cd]">
                <Outlet></Outlet>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;