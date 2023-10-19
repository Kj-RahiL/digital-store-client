import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";


const Root = () => {
    return (
        <div>
            <div className="mx-10"><Navbar></Navbar></div>
            <div className="bg-[#f4f3f0cd]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;