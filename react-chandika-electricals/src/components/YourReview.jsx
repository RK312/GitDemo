import React, { useState } from 'react';
import buttonImage from '../assets/images/imgButton.png';
import { HiOutlineBolt } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const YourReview = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending data to a server
        console.log({ name, email, phone, review });

        // Clear form fields
        setName('');
        setEmail('');
        setPhone('');
        setReview('');

        // Show toast notification
        toast.success("Thank you for your review!", {
            position: "top-right"
        });
        
    };

    return (
        <section>
            <ToastContainer />
            <div className="flex flex-col w-full md:my-24 my-12 h-auto items-center justify-center">
                
                <div className="text-2xl font-bold text-blue-800">
                    Your Review
                </div>
                <div className="md:text-5xl text-3xl font-bold">
                    Leave Your Feedback
                </div>
                
                <div className="md:w-[60rem] w-auto md:mt-12 mt-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="">
                        <input type="text" id="name" placeholder="Your Name*"
                            value={name} onChange={(e) => setName(e.target.value)}
                            className="w-full h-12 border-2 border-gray-300 shadow rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="md:grid md:grid-cols-2 gap-16">
                            <div className="md:mb-0 mb-8">
                                <input type="email" id="email" placeholder="Your Email*"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-12 border-2 border-gray-300 shadow rounded px-3 py-2"
                                    required
                                />
                            </div>
                            <div>
                                <input type="tel" id="phone" placeholder="Your Number*"
                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                    className="w-full h-12 border-2 border-gray-300 shadow rounded px-3 py-2"
                                    required
                                />
                            </div>
                    </div>
                    <div>
                        <textarea id="review" value={review} placeholder="Your Review*"
                            onChange={(e) => setReview(e.target.value)} rows={5}
                            className="w-full md:mt-2 border-2 border-gray-300 shadow rounded px-3 py-2 resize-none"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center text-center md:pt-8 pt-0">
                        <button type="submit" 
                                className="flex text-center text-white py-3 px-4 rounded w-52 font-bold"
                                style={{
                                    backgroundImage: `url(${buttonImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                  }}
                        >
                            <HiOutlineBolt className="h-6 w-6" />
                            <span>
                                Leave Your Review
                            </span>
                                
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    );
};

export default YourReview;
