import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiOutlineBolt } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quote = ({ isOpen, onClose }) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service, setService] = useState('');
    const [subService, setSubService] = useState('');
    const [pole, setPole] = useState('');
    const [comments, setComments] = useState('');

    const handleCloseForm = () => {
        // Call the onClose function to close the form
        onClose();
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log('Form submitted!');

        // Clear form fields
        setName('');
        setEmail('');
        setPhoneNumber('');
        setService('');
        setSubService('');
        setPole('');
        setComments('');

        // Close the pop-up form after submission
        handleCloseForm();

        // Show toast notification
        toast.success("Thank You!!!", {
            position: "top-right"
        });
        <ToastContainer />
    };

    return (
        <div className={`fixed z-40 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
            
            <div className="flex items-center justify-center min-h-screen">

                <div className="relative p-8 md:w-[66rem] md:h-[46rem] w-auto h-auto 
                                md:m-0 m-4 bg-white rounded-lg shadow-lg border-4 border-blue-900">
                    <button onClick={handleCloseForm} className="absolute md:top-4 md:right-8 top-2 right-4">
                        <IoClose className="text-2xl" size={32}/>
                    </button>
                    <h2 className="flex md:mb-8 mb-4 text-xl md:text-3xl justify-center items-center 
                                   font-montserrat text-blue-800 font-bold drop-shadow-md">
                        Quotation
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex md:mb-8 mb-4 items-center justify-center">
                            <input type="text" id="name" placeholder="Your Name*" 
                            className="w-full md:mx-52 p-2 border rounded-md placeholder-black text-black" value={name} 
                            onChange={(e) => setName(e.target.value)} autoComplete="name" required/>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-16 grid-col-1 md:mx-52 md:mb-8 mb-4 
                                        items-center justify-center">
                            <input type="email" id="email" placeholder="Your Email*"
                            className="w-full p-2 border rounded-md md:mb-0 mb-4 placeholder-black text-black" value={email} 
                            onChange={(e) => setEmail(e.target.value)} autoComplete="email" required/>

                            <input type="tel" id="phoneNumber" placeholder="Your Number*" 
                            className="w-full px-3 py-2 border rounded-md placeholder-black text-black" value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} autoComplete="tel" required/>
                        </div>
                        <div className="flex md:mb-8 mb-4 items-center justify-center">
                            <select id="service"
                            className="w-full md:mx-52 p-2 border rounded-md" value={service} 
                            onChange={(e) => setService(e.target.value)} autoComplete="service" required>
                                <option value="" disabled hidden>Type of Services*</option>
                                <option value="Service 1">Transformer</option>
                                <option value="Service 2">HT/LT (11Kv,3Ph-440V)</option>
                                <option value="Service 3">Under Ground Cable</option>
                            </select>
                        </div>
                        <div className="flex md:mb-8 mb-4 items-center justify-center">
                            <select id="subService"
                            className="w-full md:mx-52 p-2 border rounded-md" value={subService} 
                            onChange={(e) => setSubService(e.target.value)} autoComplete="subService" required>
                                <option value="" disabled hidden>Type of Sub Services*</option>
                                <option value="Sub Service 1">Sub Service 1</option>
                                <option value="Sub Service 2">Sub Service 2</option>
                                <option value="Sub Service 3">Sub Service 3</option>
                            </select>
                        </div>
                        <div className="flex md:mb-8 mb-4 items-center justify-center">
                            <input type="text" id="pole" placeholder="Number of pole*"
                            className="w-full md:mx-52 p-2 border rounded-md placeholder-black text-black" value={pole} 
                            onChange={(e) => setPole(e.target.value)} autoComplete="off" required/>
                        </div>
                        <div className="flex md:mb-16 mb-6 items-center justify-center">
                            <textarea id="comments" placeholder="Comments*"
                            className="w-full md:mx-52 p-2 border rounded-md placeholder-black text-black" rows="4" 
                            value={comments} onChange={(e) => setComments(e.target.value)} autoComplete="off" required/>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" 
                            className="flex items-center justify-center px-12 py-3 font-bold bg-blue-800 
                                       text-white rounded-md hover:bg-blue-600">
                                <span><HiOutlineBolt size={20}/></span>
                                SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quote;
