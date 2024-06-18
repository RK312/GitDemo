import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiOutlineBolt } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoCalendarOutline } from "react-icons/io5";

const FormExploreServices = ({ isOpen, onClose }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [service, setService] = useState('');
    const [subService, setSubService] = useState('');
    const [pole, setPole] = useState('');
    const [comments, setComments] = useState('');
    const [date, setDate] = useState(null); // Initialize with today's date

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
    };

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
        setAddress('');
        setService('');
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
        <div className={`fixed z-50 inset-0 md:mx-[27rem] mx-4 md:my-4 my-8 bg-white rounded-lg shadow-lg 
                         border-red-600 border ${isOpen ? 'block' : 'hidden'}`}>

            <div className="grid grid-col-1 h-full w-full overflow-y-auto">

                <div className="relative md:h-[4rem] h-12">
                    <button onClick={handleCloseForm} className="absolute p-2 m-1 md:right-6 right-1">
                        <IoClose className="text-2xl" size={32} />
                    </button>
                </div>

                <div className="md:mx-24 mx-4">
                    <h1 className="text-xl font-montserrat font-bold drop-shadow-md">
                            Make an Appointment
                    </h1>
                </div>

                    <form onSubmit={handleSubmit}>
                        <div className="md:mx-24 mx-4 my-4">
                            <input type="text" id="name" placeholder="Your Name*"
                                className="w-full p-3 rounded-md placeholder-black text-black 
                                    border-2 border-gray-400 shadow-inner shadow-lg" value={name}
                                onChange={(e) => setName(e.target.value)} autoComplete="name" required />
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-16 grid-col-1 md:mx-24 mx-4 mb-4">
                            <input type="email" id="email" placeholder="Your Email*"
                                className="w-full p-3 rounded-md placeholder-black text-black 
                                border-2 border-gray-400 shadow-inner shadow-lg md:mb-0 mb-4" value={email}
                                onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />

                            <input type="tel" id="phoneNumber" placeholder="Your Number*"
                                className="w-full p-3 rounded-md placeholder-black text-black 
                                border-2 border-gray-400 shadow-inner shadow-lg" value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} autoComplete="tel" required />
                        </div>
                        <div className="md:mx-24 mx-4 mb-4">
                            <input type="text" id="address" placeholder="Your Address*"
                                className="w-full p-3 rounded-md placeholder-black text-black 
                                    border-2 border-gray-400 shadow-inner shadow-lg" value={address}
                                onChange={(e) => setAddress(e.target.value)} autoComplete="address" required />
                        </div>
                        <div className="md:mx-24 mx-4 mb-4">
                            <select id="service"
                                className="w-full p-3 rounded-md placeholder-black text-black 
                                    border-2 border-gray-400 shadow-inner shadow-lg" value={service}
                                onChange={(e) => setService(e.target.value)} autoComplete="service" required>
                                <option value="" disabled hidden>Service*</option>
                                <option value="Service1">Service1</option>
                                <option value="Service2">Service2</option>
                                <option value="Service3">Service3</option>
                            </select>
                        </div>
                        <div className="md:mx-24 mx-4 mb-4 relative">
                            <DatePicker
                                selected={date}
                                onChange={handleDateChange}
                                placeholderText="Date Of Visit*"
                                dateFormat="dd/MM/yyyy" // Customize date format if needed
                                className="w-full p-3 pr-10 rounded-md placeholder-black text-black
                                    border-2 border-gray-400 shadow-inner shadow-lg"
                                wrapperClassName="w-full" // Ensures the DatePicker wrapper takes full width
                                required
                            />
                            <IoCalendarOutline size={24} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500" />
                        </div>
                        <div className="md:mx-24 mx-4 mb-4">
                            <textarea id="comments" placeholder="Comments*"
                                className="w-full p-3 rounded-md placeholder-black text-black 
                                border-2 border-gray-400 shadow-inner shadow-lg resize-none" rows="4"
                                value={comments} onChange={(e) => setComments(e.target.value)} autoComplete="off" required />
                        </div>
                        <div className="md:mx-24 mx-4 mb-4">
                            <button type="submit"
                                className="flex items-center justify-center px-12 py-3 font-bold bg-orange-500 
                                   text-white rounded-md hover:bg-orange-600">
                                <span><HiOutlineBolt size={20} /></span>
                                Explore Services
                            </button>
                        </div>
                    </form>
                    
            </div>
        </div>
    );
};


export default FormExploreServices;
