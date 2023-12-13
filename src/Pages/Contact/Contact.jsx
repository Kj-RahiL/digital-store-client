import ContactInfo from "./ContactInfo";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {

    const form = useRef();
    console.log(form)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y50kg0d', 'template_zesnv3q', form.current, 'SbscWwTck4Ol-xKfC')
            .then(() => {
                toast.success('Congrats! successfully sent message');
                e.target.reset()
            }, (error) => {
                toast.error(error.text);
            });
    };


    return (
        <div>
            <h3 className="bg-white text-center pt-10 text-5xl font-semibold">Connect With Us</h3>
            <ContactInfo></ContactInfo>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                <div className="px-5 max-w-lg mx-auto ">
                    <h2 className="text-3xl text-center font-semibold text-[#ff3837] py-10">Contact Us</h2>
                    <p className="text-gray-500">Got questions? As a dealership owned and operated by the #1 watched Car Salesman on the Planet, Mike is always happy to get your burning questions answered. Whether you’d like to know more about our used car inventory or just need some expert auto advice, leave your questions or concerns down below, and we’ll get back to you as soon as possible!</p>
                    <div className="flex gap-5 my-5 justify-center">
                       <Link to='https://www.facebook.com' target="_blank"> <FaFacebook className="text-5xl text-blue-700"></FaFacebook></Link>
                        <Link to='https://www.twitter.com' target="_blank"  ><FaTwitter className="text-5xl text-blue-500"></FaTwitter></Link>
                    </div>
                </div>
                <div className="rounded mx-auto px-10 shadow-pink-800 shadow">
                    <form ref={form} onSubmit={sendEmail} >
                        <h2 className="text-xl text-center font-semibold text-neutral-950 py-5">Send A Message</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="email"
                                name="user_name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name="user_email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea  textarea-bordered" name="message" placeholder="Write your Message"></textarea>
                        </div>

                        <div className="form-control py-6">
                            <button className="btn btn-outline bg-brown-600 text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;