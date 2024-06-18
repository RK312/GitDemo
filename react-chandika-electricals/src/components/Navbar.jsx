import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import { IoClose } from "react-icons/io5";
import buttonImage from '../assets/images/imgButton.png';
import Quote from '../pages/Quote';
import Header from '../components/Header';
import LogoImg from '../assets/images/LogoImg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // For Navbar Fixed To Top
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const toggleMenuAndForm = () => {
    // Menu and Form is closed when get quote is clicked on small devices
    toggleForm();
    toggleMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (isMenuOpen) {
      // Called For Small Devices
      toggleMenu();
    }
  };

  const scrollToSection = (hash) => {

    if (isMenuOpen) {
      // Called For Small Devices
      toggleMenu();
    }

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) { element.scrollIntoView({ behavior: 'smooth' }); }
      else { console.log(`Element with ID ${hash} not found in the DOM.`); }
    }, 100); // Wait for 100 milli seconds before executing the function body
  };

  const NAV_ITEMS = [
    { path: '/', hash: '', label: 'Home' },
    { path: '/about', hash: '#about', label: 'About Us' },
    { path: '/services', hash: '', label: 'Services' },
    { path: '/contact', hash: '', label: 'Contact Us' },
  ];

  const navigationLinks = NAV_ITEMS.map((item, index) => (
    <Link
      key={index} to={item.path}
      onClick={() => {
        if (item.hash === '') { scrollToTop(); }
        else { scrollToSection(item.hash); }
      }}
      className="block text-lg px-4 pt-2 font-poppins font-bold hover:text-blue-600"
    >
      {item.label}
    </Link>
  ));

  const fixedClass = isScrolled ? 'fixed top-0 left-0 z-50 rounded-b-2xl transition-all duration-500 ease-in-out' : '';

  return (
    <section>
      <Header />

      <nav className={`md:h-[5.5rem] w-full bg-white shadow-lg ${fixedClass}`}>

        <div className="hidden md:block ">
          {/* Medium Devices */}
          <div className="md:flex md:flex-row md:w-full md:h-[5.5rem]">

            <div className="md:ml-[6rem] md:w-[20rem] md:h-[5rem] md:m-1">
              <img src={LogoImg} alt="Logo Image" className="md:h-full md:w-full object-contain" /> 
            </div>

            <div className="md:flex md:items-center md:m-1 md:ml-[14rem] md:w-auto md:h-[5rem]">
              {navigationLinks}
            </div>

            <div className="md:flex md:items-center md:m-1 md:ml-[5rem] md:w-auto md:h-[5rem]">
              <button onClick={toggleForm} className="text-white px-12 py-2 rounded-md 
                                                    font-bold shadow-md border-2 border-gray-400"
                style={{
                  backgroundImage: `url(${buttonImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                Get Quote
              </button>
              <Quote isOpen={isFormOpen} onClose={toggleForm} />
            </div>

          </div>

        </div>

        <div className="sm:block md:hidden">
          {/* Small Devices */}
          <div className="relative flex items-center">
            
            <div className="ml-2 w-[10rem] h-[3.5rem]">
              <img src={LogoImg} alt="Logo Image" className="h-full w-full object-contain" /> 
            </div>

            <div className="absolute right-2">
              <button className="block hover:text-blue-600" onClick={toggleMenu}>
                {!isMenuOpen ? (<RiMenu3Line className="text-3xl" />) : (<IoClose className="text-3xl" />)}
              </button>
            </div>

            {isMenuOpen && (
              <div className="absolute z-10 items-start mx-6 top-[3.5rem] w-5/6 bg-gray-100 shadow-lg">
                {navigationLinks}
                <button onClick={toggleForm}
                  className="text-start text-lg px-4 pt-2 w-full font-poppins font-bold hover:text-blue-600">
                  Get Quote
                </button>
                <Quote isOpen={isFormOpen} onClose={toggleMenuAndForm} />
              </div>
            )}

          </div>

        </div>

      </nav>
    </section>
  );
};

export default Navbar;
