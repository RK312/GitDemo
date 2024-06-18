import React, { useState } from 'react';
import { FaHouse, FaBuilding } from "react-icons/fa6";
import { HiMiniWrenchScrewdriver } from 'react-icons/hi2';
import { HiOutlineLightBulb } from "react-icons/hi";
import OurServicesImg1 from '../assets/images/OurServicesImg1.png';
import OurServicesImg2 from '../assets/images/OurServicesImg2.png';
import OurServicesImg3 from '../assets/images/OurServicesImg3.png';
import OurServicesImg4 from '../assets/images/OurServicesImg4.png';

const OurServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const teamService = {
        cards: [
            {
                imageUrl: OurServicesImg1,
                profile: "RESIDENTIAL",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                icon: <FaHouse />
            },
            {
                imageUrl: OurServicesImg2,
                profile: "COMMERCIAL",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                icon: <FaBuilding />
            },
            {
                imageUrl: OurServicesImg3,
                profile: "MAINTENANCE",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                icon: <HiMiniWrenchScrewdriver />
            },
            {
                imageUrl: OurServicesImg4,
                profile: "LIGHTING",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                icon: <HiOutlineLightBulb />
            },
        ],
        servicesHead1: "OUR SERVICES",
        servicesHead2: "We offer a comprehensive range of cost-effective services for residential and commercial properties.",
    };

    const TeamService = ({ imageUrl, profile, icon, description }) => {
        return (
            <div
                className="relative flex flex-row items-center min-h-80 min-w-72 m-2 rounded-lg"
                onMouseEnter={() => setHoveredIndex(profile)}
                onMouseLeave={() => setHoveredIndex(null)}                
            >
                <img src={imageUrl} alt={profile} className="w-72 h-80" />
                {/* icon div */}
                <div className={`absolute bottom-0 inset-x-0 h-12 w-full  
                           py-2 font-montserrat text-center text-2xl bg-blue-900 opacity-80 
                           text-white rounded-b-xl flex items-center 
                           justify-center ${hoveredIndex === profile ? 'hidden' : 'block'}`}>
                    <span className="mr-2 text-yellow-300">{icon}</span>
                    <span>{profile}</span>
                </div>
                {hoveredIndex === profile && (
                    <div className="absolute inset-0 bg-blue-900 opacity-80 flex flex-col 
                                    justify-center items-center rounded-xl p-0 m-0">
                        <div className="relative text-center text-white">
                            <div className="ml-[7.5rem] mb-2 w-12 h-12 text-yellow-300">
                            {React.cloneElement(icon, { size: '3rem'})}
                            </div>
                            <span className="font-bold text-2xl block">{profile}</span>
                            <div className="mt-2 text-xl">{description}</div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <section id="services">
        <div className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">

            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-5xl font-montserrat font-semibold text-blue-800 mb-2">
                    {teamService.servicesHead1}
                </h2>
                <p className="text-lg md:text-xl font-montserrat font-medium text-black mx-auto">
                    {teamService.servicesHead2}
                </p>
            </div>
            {/* card */}
            <div className="flex md:flex-row md:items-center md:justify-center overflow-x-auto">
                    {teamService.cards.map((member, index) => (
                        <TeamService
                            key={index}
                            imageUrl={member.imageUrl}
                            profile={member.profile}
                            icon={member.icon}
                            description={member.description}
                        />
                    ))}        
            </div>
        </div>
        </section>
    )
}

export default OurServices;
