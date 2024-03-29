import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCart from "../BrandProduct/BrandCart";
import AboutUs from "./About.jsx/AboutUs";
import ContactUs from "../Contact/ContactUs";
import DarkMode from "../../darkmood/DarkMood";


const Home = () => {
    const brands = useLoaderData()
    // console.log(brands)
    
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20 text-center space-y-3">
                <h2 className="text-4xl font-semibold">Our <span className="text-[#FF3737]">Brands</span></h2>
                <p className="text-sm text-gray-600 font-medium">THE AUTOS WE DEALS IN</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 py-10 mx-3 md:mx-10">
                    {
                        brands.map(brand => <BrandCart  key={brand.id} brand={brand}></BrandCart>)
                    }
                </div>
            </div>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;