import React from 'react';
import headerImg from '../assets/images/imgHeader.png';
import { BsTelephonePlusFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Header = () => {
    return (
        <section>

            <div className="relative h-12 w-full rounded-t-2xl"
                style={{
                    backgroundImage: `url(${headerImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                <div className="absolute flex flex-row w-auto h-full text-white md:left-[11rem] items-center">
                    <BsTelephonePlusFill className="md:h-6 md:w-6 h-3 w-3 mr-1" />
                    +91 855-402-4133
                </div>

                <div className="absolute flex flex-row w-auto h-full text-white md:left-[24rem] left-[9.5rem] items-center">
                    <IoIosMail className="md:h-6 md:w-6 h-3 w-3 mr-1" />
                    info@chandikaelectricals.in
                </div>

                <div className="absolute flex flex-row h-full text-white md:right-[10rem] right-2 items-center">
                    <a href="https://facebook.com" target="_blank">
                        <MdOutlineFacebook className="md:h-6 md:w-6 h-5 w-5 md:mr-8 mr-1" />
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <FaInstagramSquare className="md:h-6 md:w-6 h-5 w-5 md:mr-8 mr-1" />
                    </a>
                    <a href="https://youtube.com" target="_blank">
                        <BsYoutube className="md:h-6 md:w-6 h-5 w-5" />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Header;
