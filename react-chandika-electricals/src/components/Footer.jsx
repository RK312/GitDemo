import React, { useState } from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { HiOutlineBolt } from "react-icons/hi2";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { MdArrowBackIos, MdArrowForwardIos, MdClose } from "react-icons/md";
import imgFooterBg from '../assets/images/img_footer.png';
import imgGallery1 from '../assets/images/Fotter/imgGallery1.png';
import imgGallery2 from '../assets/images/Fotter/imgGallery2.png';
import imgGallery3 from '../assets/images/Fotter/imgGallery3.png';
import imgGallery4 from '../assets/images/Fotter/imgGallery4.png';
import imgGallery5 from '../assets/images/Fotter/imgGallery5.png';
import imgGallery6 from '../assets/images/Fotter/imgGallery6.png';
import imgGallery7 from '../assets/images/Fotter/imgGallery7.png';
import imgGallery8 from '../assets/images/Fotter/imgGallery8.png';
import imgGallery9 from '../assets/images/Fotter/imgGallery9.png';
import imgGallery10 from '../assets/images/Fotter/imgGallery10.png';
import imgGallery11 from '../assets/images/Fotter/imgGallery11.png';
import imgGallery12 from '../assets/images/Fotter/imgGallery12.png';
import imgGallery13 from '../assets/images/Fotter/imgGallery13.png';
import imgGallery14 from '../assets/images/Fotter/imgGallery14.png';
import imgGallery15 from '../assets/images/Fotter/imgGallery15.png';
import imgGallery16 from '../assets/images/Fotter/imgGallery16.png';

const ImageModal = ({ imageUrl, alt, onClose, onPrev, onNext }) => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="bg-white p-0 rounded-lg modal-content relative">
                <button onClick={onClose} className="absolute top-2 right-2 bg-white rounded-full text-black hover:text-red-500">
                    <MdClose size={36}/>
                </button>
                <button onClick={onPrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 
                                                    bg-black rounded-full text-white hover:text-blue-500">
                    <MdArrowBackIos size={36}/>
                </button>
                <button onClick={onNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 
                                                    bg-black rounded-full text-white hover:text-blue-500">
                    <MdArrowForwardIos size={36}/>
                </button>
                <img src={imageUrl} alt={alt} className="h-80 w-80 md:h-[30rem] md:w-[30rem] object-cover rounded-lg" />
            </div>
        </div>
    );
};

const Footer = () => {

    const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

    const handleImageClick = (index) => {
        setEnlargedImageIndex(index);
    };

    const handleCloseModal = () => {
        setEnlargedImageIndex(null);
    };

    const handlePrevImage = () => {
        if (enlargedImageIndex > 0) {
            setEnlargedImageIndex(enlargedImageIndex - 1);
        }
    };

    const handleNextImage = () => {
        if (enlargedImageIndex < galleryImages.length - 1) {
            setEnlargedImageIndex(enlargedImageIndex + 1);
        }
    };

    const galleryImages = [

        {   imageUrl: imgGallery1,    alt: "imgGal1"   },
        {   imageUrl: imgGallery2,    alt: "imgGal2"   },
        {   imageUrl: imgGallery3,    alt: "imgGal3"   },
        {   imageUrl: imgGallery4,    alt: "imgGal4"   },
        {   imageUrl: imgGallery5,    alt: "imgGal5"   },
        {   imageUrl: imgGallery6,    alt: "imgGal6"   },
        {   imageUrl: imgGallery7,    alt: "imgGal7"   },
        {   imageUrl: imgGallery8,    alt: "imgGal8"   },
        {   imageUrl: imgGallery9,    alt: "imgGal9"   },
        {   imageUrl: imgGallery10,    alt: "imgGal10"   },
        {   imageUrl: imgGallery11,    alt: "imgGal11"   },
        {   imageUrl: imgGallery12,    alt: "imgGal12"   },
        {   imageUrl: imgGallery13,    alt: "imgGal13"   },
        {   imageUrl: imgGallery14,    alt: "imgGal14"   },
        {   imageUrl: imgGallery15,    alt: "imgGal15"   },
        {   imageUrl: imgGallery16,    alt: "imgGal16"   },

    ];

    const socialMediaLinks = [
        { icon: <MdOutlineFacebook className="mr-1" />, name: 'Facebook', link: 'https://facebook.com' },
        { icon: <FaInstagramSquare className="mr-1" />, name: 'Instagram', link: 'https://instagram.com' },
        { icon: <TfiYoutube className="mr-1" />, name: 'YouTube', link: 'https://youtube.com' }
    ];

    const footerData = {
        title: 'Chandika Electricals',
        description: 'With over 8 years experience in the industry, adipiscing elit. Tortor vel posuere',
        place: 'Aurangabad',
        email: 'info@chandikaelectricals.in',
        contact: '+91 855-402-4133',
        social_title: 'SOCIAL MEDIA',
        newsletter_title: 'NEWSLETTER',
        inputPlaceholder: 'Your email',
        buttonText: 'SUBSCRIBE',
        gallery_title: 'GALLERY',
        copyright: 'Copyright@ChandikaElectricals',
        createdBy: 'Web Design & Developed By InnovativSoft',
        websitelink: 'https://innovativsoft.com'
    };

    return (
        <footer>
                {/* backgroundImage */}
            <div className="relative h-[50rem] md:h-[25rem] w-auto bg-cover bg-center text-white"
                style={{ backgroundImage: `url(${imgFooterBg})` }}
            >
                {/* Description */}
                <div className="absolute left-0 top-0 md:left-32 md:top-16 h-auto w-auto 
                              m-4 md:m-0 md:h-72 md:w-96">

                    <div className="h-10 w-auto font-montserrat font-bold shadow text-xl md:text-4xl">
                        <h1 className="flex items-center">
                            <HiOutlineBolt />
                            <span>{footerData.title}</span>
                        </h1>
                    </div>

                    <div className="md:ml-12 md:mt-12 h-48">
                        <p className="md:pr-12 pr-16">
                            {footerData.description}
                        </p>
                        <p className="absolute bottom-14">
                            {footerData.place}
                        </p>
                        <p className="absolute bottom-8">
                            {footerData.email}
                        </p>
                        <p className="absolute bottom-2">
                            {footerData.contact}
                        </p>
                    </div>

                </div>

                {/* Social */}
                <div className="absolute top-60 left-0 md:top-24 md:left-[40rem] h-auto w-auto 
                              md:h-56 md:w-64 m-4 md:m-0">

                    <p className="font-bebasneue font-bold text-lg drop-shadow-md">
                        {footerData.social_title}
                    </p>

                    {socialMediaLinks.map((socialMedia, index) => (
                        <a key={index} href={socialMedia.link} target="_blank" className="flex items-center font-inika">
                            {socialMedia.icon}
                            <span>{socialMedia.name}</span>
                        </a>
                    ))}

                    <p className="font-bebasneue font-bold text-lg drop-shadow-md mt-4">
                        {footerData.newsletter_title}
                    </p>
                    <p className="flex mt-4">

                        <input type="text" placeholder={footerData.inputPlaceholder} 
                        className="w-36 p-2 text-black focus:outline-none rounded-l border border-gray-300" />
                        <button className="px-4 py-2 bg-black text-white 
                                      shadow hover:bg-green-600 text-xs font-semibold rounded-r border border-gray-300">
                            {footerData.buttonText}
                        </button>
                    </p>
                </div>

                {/* Gallery */}
                <div className="absolute top-[29rem] left-0 md:top-24 md:left-[63rem] md:h-72 md:w-96 
                              m-4 md:m-0">
                    <div className="font-bebasneue font-bold text-lg h-10 w-full">
                            {footerData.gallery_title}
                    </div>
                    <div className="grid grid-cols-4 gap-2 h-60 w-full">
                        {galleryImages.map((item, index) => (
                            <img
                                key={index}
                                src={item.imageUrl}
                                alt={item.alt}
                                className="w-20 h-12 object-cover rounded cursor-pointer"
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                    {enlargedImageIndex !== null && (
                        <ImageModal
                            imageUrl={galleryImages[enlargedImageIndex].imageUrl}
                            alt={galleryImages[enlargedImageIndex].alt}
                            onClose={handleCloseModal}
                            onPrev={handlePrevImage}
                            onNext={handleNextImage}
                        />
                    )}
                </div>

            </div>

            {/* Copyright */}
            <div className="bg-gray-900 h-24 w-auto text-white rounded-b-2xl">

                <div className="absolute font-inika text-base md:w-96 pl-2 md:left-36 md:mt-8">
                        {footerData.copyright}
                </div>
                <a href={footerData.websitelink} target="_blank">
                        <div dir="rtl" className="absolute font-inika text-base font-semibold 
                                                  md:w-96 pl-2 md:right-32 mt-8 md:mt-8">
                            {footerData.createdBy}
                        </div>
                </a>
                <div className="absolute right-6 md:right-10 mt-8 md:mt-8 
                                text-orange-500 bg-white md:p-2 p-1 rounded-full border-orange-500 border-2">
                    <AiFillThunderbolt className="md:text-lg" />
                </div>

            </div>


        </footer>
    )
}

export default Footer;
