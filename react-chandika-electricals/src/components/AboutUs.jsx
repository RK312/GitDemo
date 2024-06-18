import React from 'react';
import { VscNote } from 'react-icons/vsc';
import { CiClock2 } from 'react-icons/ci';
import { PiWalletLight } from 'react-icons/pi';
import { motion } from 'framer-motion';
import HeroImage from '../assets/images/HeroImage.png';
import Chan from '../assets/images/img1_aboutUs.png';
import logo from '../assets/images/img_aboutUs_logo.png';

const AboutUs = () => {

  const textContent = {
    cards: [
      {
        icon: <VscNote size={72} style={{ color: '#8B8B8B', strokeWidth: 0, stroke: 'transparent' }} />,
        alt: "Note Icon",
        title: "Free Estimation",
        description: ""
        // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere
      },
      {
        icon: <CiClock2 size={72} style={{ color: '#8B8B8B', strokeWidth: 0.5, stroke: 'outline' }} />,
        alt: "Clock Icon",
        title: "24/7 Available",
        description: ""
      },
      {
        icon: <PiWalletLight size={72} style={{ color: '#8B8B8B', strokeWidth: 0.5, stroke: 'outline' }} />,
        alt: "Wallet Icon",
        title: "Affordable Prices",
        description: ""
      },
    ],
    backImgTitle1: "SAFE AND SECURE",
    backImgTitle2: "We are a Service You Can Trust",
    backImgTitle3: "Contact Us Now",
    aboutSectionTitle: "WE ARE CHANDIKA ELECTRICALS",
    aboutSectionSubtitle: "About Us",
    aboutSectionContent1:
      "With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere vitae enim, molestie. Diam consequat acvelit ac, morbi erat. Sed ipsum lorem feugiat iaculis sollicitudin molt.",
    aboutSectionContent2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor vel posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aboutHead1: "OUTSTANDING RESIDENTIALS &",
    aboutHead2: "COMMERCIALS ",
    aboutHead3: "SERVISES",
    aboutSubSection1: "Chandika Electricals",
    aboutSubSection2: "& Teams",
    readMoreButton: "Read More..."
  };

  return (
    <section>

      {/* Safe And Secure Image */}
      <div className="relative h-[40rem] w-auto">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${HeroImage})`,
            scale: 0, // Initial scale
          }}
          animate={{ scale: 1 }} // Animate scale to 1
          transition={{ duration: 1 }} // Transition duration in seconds
        />

        <div className="absolute md:top-72 top-44 md:left-40 left-8 flex flex-col text-white">
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-8"
            initial={{ x: "100vw" }} // Initial position from right
            animate={{ x: 0 }} // Animate to original position
            transition={{ duration: 1.5, delay: 1 }} // Transition duration in seconds with delay
          >
            {textContent.backImgTitle1}
          </motion.h1>
          <motion.p
            className="text-lg md:text-4xl mb-12"
            initial={{ x: "100vw" }} // Initial position from right
            animate={{ x: 0 }} // Animate to original position
            transition={{ duration: 1.5, delay: 1.2 }} // Transition duration in seconds with delay
          >
            {textContent.backImgTitle2}
          </motion.p>
          <motion.button
            className="text-white font-bold py-4 px-4 w-60 rounded-md text-lg md:text-2xl border-2 border-white"
            initial={{ x: "100vw" }} // Initial position from right
            animate={{ x: 0 }} // Animate to original position
            transition={{ duration: 1.5, delay: 1.3 }} // Transition duration in seconds with delay
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 0], transition: { duration: 0.2 } }}
          >
            {textContent.backImgTitle3}
          </motion.button>
        </div>
      </div>

      {/* 3 Icons */}
      <div className="flex flex-col w-auto h-auto md:flex-row md:mt-12 md:pl-16">
        {textContent.cards.map((card, index) => (

          <div key={index} className="w-auto h-auto md:w-80 md:h-60 md:ml-24">

            <div className="flex justify-center items-center text-gray-600">
              {card.icon}
            </div>
            <div id="about" className="text-center font-montserrat font-semibold text-2xl w-auto pt-3">
              {card.title}
            </div>
            <div className="text-center font-montserrat font-semibold text-lg text-gray-600 w-auto pt-3">
              {card.description}
            </div>

          </div>

        ))}
      </div>

      <div className="flex flex-col md:mt-12 md:px-24 p-0 md:mt-0 mt-4 text-center font-montserrat 
                      md:text-left font-bold text-lg md:text-3xl w-auto text-blue-900">
        {textContent.aboutSectionTitle}
      </div>

      <div className="flex flex-col p-4 md:p-0">

        <div className="md:flex md:flex-row">
          {/* Image AboutUs */}
          <div className="relative md:basis-2/6 md:ml-24 md:h-[35rem]">
            <img src={Chan} alt="About Image" className="w-full h-full object-cover" />

            <div className="absolute md:bottom-6 md:-right-40 -bottom-6 right-0 w-60 h-20 p-4 
                              bg-blue-700 border-2 border-gray-500">

              <div className="absolute left-0 top-0 w-4 h-full text-white bg-white overflow-hidden">
              </div>
              <div className="justify-center items-center text-white">
                <p className="text-center font-semibold text-white">
                  {textContent.aboutSubSection1}
                </p>
                <p className="text-center text-white">
                  {textContent.aboutSubSection2}
                </p>
              </div>

            </div>

          </div>

          {/* AboutUs Heading And Sub Heading */}
          <div className="md:basis-4/6 relative md:px-24 md:mt-0 mt-8">

            <div className="flex flex-col font-montserrat font-bold md:text-3xl text-lg text-blue-900">
              <div className="flex items-center drop-shadow-md">
                {textContent.aboutSectionSubtitle}
                <img src={logo} alt="About Image" className="h-6 w-6" />
              </div>
            </div>

            <div className="flex flex-col font-bebas-neue font-normal md:text-5xl text-xl">
              <div className="items-center drop-shadow-md md:pt-2">
                {textContent.aboutHead1}
              </div>
              <div className="items-center drop-shadow-md md:pt-6">
                <span className="text-orange-700">{textContent.aboutHead2}</span>
                {textContent.aboutHead3}
              </div>
            </div>

            <div className="flex flex-col md:pt-8 md:mr-32 font-inter font-normal md:text-2xl h-auto
                              md:mb-0 mb-16">
              <p>
                {textContent.aboutSectionContent1}
              </p>
              <p>
                {textContent.aboutSectionContent2}
              </p>
            </div>

            <div className="absolute md:bottom-6 md:right-24 -bottom-16 right-0 
                            rounded-lg px-6 py-2 border-2 border-black">
              <button className="font-bold">
                {textContent.readMoreButton}
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AboutUs;
