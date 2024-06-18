import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import WorkWithImg1 from '../assets/images/WorkWithImg1.png';
import WorkWithImg2 from '../assets/images/WorkWithImg2.png';
import WorkWithImg3 from '../assets/images/WorkWithImg3.png';
import WorkWithImg4 from '../assets/images/WorkWithImg4.png';
import WorkWithImg5 from '../assets/images/WorkWithImg5.png';

const WorkWithThem = () => {

    const work_With = [
        {
            imageUrl: WorkWithImg1,
            title: "MAHAVITARAN",
            description: "Mahavitaran, or Maharashtra State Electricity Distribution Company Limited (MSEDCL), is a public company that distributes electricity to the state of Maharashtra in India.",
        },
        {
            imageUrl: WorkWithImg2,
            title: "MAHATRANSCO",
            description: "Maharashtra State Electricity Transmission Company Limited (MAHATRANSCO) is the main electricity transmission company in Maharashtra, India, and is owned by the Maharashtra government.",
        },
        {
            imageUrl: WorkWithImg3,
            title: "PERKINS",
            description: "Perkins Engines Company Limited is a subsidiary of Caterpillar Inc. and a leading provider of diesel and gas engines. The company was founded in 1932 by Frank Perkins and Charles Chapman to design.",
        },
        {
            imageUrl: WorkWithImg4,
            title: "GOOD YEAR",
            description: "Goodyear Tire & Rubber Company is an American multinational tire manufacturer that also develops, distributes, and sells rubber-related chemicals.",
        },
        {
            imageUrl: WorkWithImg5,
            title: "VARROC EXCELLENCE",
            description: "Varroc Excellence is a global automotive component company that manufactures and supplies exterior lighting systems, plastic and components to two-wheeler, three-wheeler, passenger cars, commercial vehicles, and off-highway vehicle OEMs.",
        },
        {
            imageUrl: WorkWithImg1,
            title: "MAHAVITARAN1",
            description: "Mahavitaran, or Maharashtra State Electricity Distribution Company Limited (MSEDCL), is a public company that distributes electricity to the state of Maharashtra in India.",
        },
        {
            imageUrl: WorkWithImg2,
            title: "MAHATRANSCO",
            description: "Maharashtra State Electricity Transmission Company Limited (MAHATRANSCO) is the main electricity transmission company in Maharashtra, India, and is owned by the Maharashtra government.",
        },
    ];

    const WorkWith = ({ imageUrl, title, description }) => {
        return (
            <div className="m-2 md:m-7 md:my-20 p-2 relative flex flex-col text-wrap 
                            items-center rounded-lg shadow-lg shadow-inner w-48 h-56 border-2 
                            border-gray-200 bg-gray-100">
                <div className="flex justify-center">
                    <img src={imageUrl} alt={title} className="w-24 h-16 object-contain" />
                </div>                
                <div className="text-left mt-2 h-8 w-full overflow-hidden">
                    <h2 className="font-montserrat font-semibold text-sm text-left">
                        {title}
                    </h2>
                </div>
                <div className="text-wrap overflow-hidden">
                    <p className="font-montserrat text-xs">
                        {description}
                    </p>
                </div>
            </div>
        );
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(5);

    // Set cards per page based on device width
    useEffect(() => {
        const handleResize = () => {
            setCardsPerPage(window.innerWidth < 640 ? 1 : 5);
            setCurrentIndex(prevIndex => Math.min(prevIndex, work_With.length - cardsPerPage));
        };

        // Initial setup
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [work_With.length, cardsPerPage]);

    const goToNextCards = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + cardsPerPage, work_With.length - cardsPerPage));
    };

    const goToPreviousCards = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - cardsPerPage, 0));
    };

    return (
        <div className="my-6 md:my-8">
            <div className="text-center">
                <h2 className="text-2xl md:text-5xl font-montserrat font-bold mb-2">
                    Work With Them
                </h2>
            </div>
            <div className="flex justify-center items-center mb-4">
                <button onClick={goToPreviousCards} className="mx-2 p-3 md:text-5xl text-3xl rounded-full 
                        text-gray-700 hover:text-blue-500">
                    <IoIosArrowBack />
                </button>
                <div className="grid md:grid-cols-5">
                    {work_With.slice(currentIndex, currentIndex + cardsPerPage).map((member, index) => (
                        <WorkWith
                            key={index}
                            imageUrl={member.imageUrl}
                            title={member.title}
                            description={member.description}
                        />
                    ))}
                </div>
                <button onClick={goToNextCards} className="mx-2 p-3 md:text-5xl text-3xl rounded-full 
                        text-gray-700 hover:text-blue-500">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
}

export default WorkWithThem;
