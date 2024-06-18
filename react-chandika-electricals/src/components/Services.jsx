import React, { useState } from 'react';
import ServicesHeadImg from '../assets/images/ServicesHeadImg.png';
import { IoMdArrowDropright } from "react-icons/io";
import { RxLightningBolt } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { motion } from 'framer-motion';
import FormExploreServices from '../pages/FormExploreServices';
import WeOfferImg1 from '../assets/images/WeOfferImg1.png';
import WeOfferImg2 from '../assets/images/WeOfferImg2.png';
import WeOfferImg3 from '../assets/images/WeOfferImg3.png';
import WeOfferImg4 from '../assets/images/WeOfferImg4.png';
import WeOfferImg5 from '../assets/images/WeOfferImg5.png';
import WeOfferImg6 from '../assets/images/WeOfferImg6.png';
import OurElectriciansImg1 from '../assets/images/OurElectriciansImg1.png';

const data = {

    onImgText: "Home / Our Services",
    heading1: "What We Offer",
    imgData: [
        {
            img: WeOfferImg1,
            altText: "We Img1",
            title: "HT/LT overhead lines",
            description: "We are offering to our valued customers a supreme quality range of HT/LT overhead lines equipments services.",
        },
        {
            img: WeOfferImg2,
            altText: "We Img2",
            title: "HT/LT underground cables",
            description: "We are offering  to our valued customers a supreme quality range  of HT/LT underground cables services.",
        },
        {
            img: WeOfferImg3,
            altText: "We Img3",
            title: "HT/LT panels and breakers",
            description: "We are offering  to our valued customers a annual maintenance contract for HT/LT panels and breakers.",
        },
        {
            img: WeOfferImg4,
            altText: "We Img4",
            title: "Transformers",
            description: "Chandika Electricals offers complete testing, maintainence & repair services to electrical substation and distribution equipment.",
        },
        {
            img: WeOfferImg5,
            altText: "We Img5",
            title: "11/22/33 KV Substation",
            description: "With our in-depth industry experience, we are engaged in providing electrical services for the maintenance of substation work.",
        },
        {
            img: WeOfferImg6,
            altText: "We Img6",
            title: "Earthing Stations",
            description: "We are offering  to our valued customers a Installation, repair and maintenance of earthing stations.",
        },

    ],
    readMore: "Read more",
    whyUs: "Why us?",
    ourElectrician: "Our Electricians are:",
    whyData: [
        {
            content: "Fully screened and background checked for your peace of mind",
        },
        {
            content: "We don’t hire anyone we wouldn’t hire to work inside of our own homes.",
        },
        {
            content: "Neat, clean and uniformed for safety and security",
        },
        {
            content: "Knowledgeable, experienced and skilled",
        },
        {
            content: "Rigorously trained in customer service",
        },
        {
            content: "Fully licensed, bonded and insured",
        },
        {
            content: "Friendly, helpful, and reliable.",
        },
    ],
    
};

const Services = () => {

    const [isFormExpOpen, setIsFormExpOpen] = useState(false);

    const toggleExpForm = () => {
        setIsFormExpOpen(!isFormExpOpen);
      };

  return (
    <div>
        {/* Background Image */}
        <motion.div className="h-[20rem] w-auto"
                style={{
                    backgroundImage: `url(${ServicesHeadImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    x: "100vw", // Set initial x
                }}
                animate={{ x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.2,
                    onComplete: (animation) => {
                        animation.target.style.x = "0vw"; // After animation, set x to 0vw
                      },
                  }}
        >
                <motion.div className="text-3xl md:text-5xl pl-[2rem] pt-[12rem] md:pl-[8rem] md:pt-[10rem] text-white"
                        initial={{ scale: 0 }}
                        transition={{ duration: 2 }}
                        animate={{ rotate: 360, scale: 1 }}    
                >
                     {data.onImgText}
                </motion.div>
        </motion.div>

        {/* What We Offer Heading */}
        <div className="text-4xl md:text-6xl py-4 md:py-8 text-center font-montserrat font-bold text-blue-800">
                {data.heading1}
        </div>

        {/* We Offer Cards */}
        <div className="md:flex-none text-center md:px-0 px-4 md:py-0 py-4">

            {data.imgData.map((item, index) => (
                <div key={index} className="relative inline-block md:h-[27.2rem] h-[31rem] md:mr-6 mr-0 mb-4 border-2 border-yellow-500">

                    <div className="md:h-[18rem] md:w-[27rem] h-[18rem] w-auto">
                        <img src={item.img} alt={item.altText} className='object-cover h-full w-full' />
                    </div>

                    <div className="relative md:top-[-6rem] top-[-3rem] md:h-[15rem] md:w-[22rem] h-[15rem] w-[20rem] 
                                    bg-white drop-shadow-xl">
                        
                        <div className="text-left px-4 py-6 font-montserrat font-semibold text-2xl">
                                {item.title}
                        </div>

                        <div className="text-left h-[6rem] px-4 font-montserrat text-base text-gray-700 overflow-hidden">
                               {item.description}
                        </div>

                        <div className="absolute bottom-0 flex h-[3.5rem] px-4 items-center font-montserrat font-bold text-base">
                                        {data.readMore}
                                        <IoMdArrowDropright size={24} className="text-orange-500"/>          
                        </div>
            
                    </div>

                </div>
            ))}
        </div>

        {/* Schedual Services Button */}
        <div className="flex md:py-12 py-6 justify-center">
                <button onClick={toggleExpForm} className="flex md:w-80 md:h-20 w-48 h-16 md:text-2xl items-center justify-center font-montserrat 
                                   font-bold rounded-2xl text-white bg-orange-500">
                        <RxLightningBolt />
                        Schedual For Services
                </button>
            <FormExploreServices isOpen={isFormExpOpen} onClose={toggleExpForm} />     
        </div>

        {/* Why Us */}
        <div className="grid md:grid-cols-2 grid-col-1 md:px-32 px-4 md:pb-20 pb-4 w-full">
                <div className="">
                        <div className="font-montserrat font-bold text-xl text-orange-500">
                            {data.whyUs}
                        </div>
                        <div className="font-montserrat font-bold md:text-5xl text-3xl">
                            {data.ourElectrician}
                        </div>
                        <div className="mt-4">
                            {data.whyData.map((item, index) => (
                                <div key={index} className="mt-2 flex">

                                    <div className="h-8 w-8 mr-2">
                                        <TiTick size={28} className="text-orange-500"/>
                                    </div>

                                    <div className="min-h-8 w-full">
                                        <p className="font-montserrat text-xl">
                                            {item.content}       
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                </div>

                <div className="md:mt-0 mt-4">
                        <img src={OurElectriciansImg1} alt="Img Elec" className="w-full shadow-md" />
                </div>
        </div>

    </div>
  );
};

export default Services;
