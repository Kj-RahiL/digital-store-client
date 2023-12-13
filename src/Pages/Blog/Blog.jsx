import { useEffect, useState } from "react";
import background from '../../assets/bg.png'
import {  FaCalendar, FaUser } from "react-icons/fa";

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)
    return (
        <div className="py-20 bg-cover bg-blue-gray-50" style={{ backgroundImage: `url(${background})` }}>
            <h2 className="text-center text-5xl font-bold my-8">OUR LATEST BLOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5">
                {
                    blogs.map(blog => <div key={blog._id} className="card w-full bg-black text-white shadow-md shadow-amber-500">
                        <figure className="h-[300px]"><img className="h-full w-full" src={blog.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div className="flex flex-wrap justify-between items-center -mt-5 mb-5">
                                <div>
                                    <h3 className="flex items-center gap-5 text-gray-500"><FaUser></FaUser>{blog.author}</h3>
                                    <h3 className="flex items-center gap-5 text-gray-500"><FaCalendar></FaCalendar>{blog.published_date}</h3>
                                </div>
                            <h2 className="px-3 py-1 rounded  text-center border bg-blue-gray-800 ">{blog.category}</h2>
                            </div>
                            <h2 className="card-title">{blog.title}
                            </h2>
                            <p>{blog.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;



