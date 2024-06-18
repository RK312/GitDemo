import React, { useRef, useEffect } from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import OurTeamImg1 from '../assets/images/OurTeamImg1.png';
import OurTeamImg2 from '../assets/images/OurTeamImg2.png';
import OurTeamImg3 from '../assets/images/OurTeamImg3.png';
import OurTeamImg4 from '../assets/images/OurTeamImg4.png';

const OurTeam = () => {
  const teamRef = useRef(null);

  const teamMembers = {
    cards: [
    {
      imageUrl: OurTeamImg1,
      profile: "Electrician",
      name: "Jack Wilshere",
      email: "info@chnadikaelectricals.com",
      phoneNumber: "+00000000000"
    },
    {
      imageUrl: OurTeamImg2,
      profile: "Wirin Technician",
      name: "Rekha Swift",
      email: "info@chnadikaelectricals.com",
      phoneNumber: "+00000000000"
    },
    {
      imageUrl: OurTeamImg3,
      profile: "Service Manager",
      name: "Will Jacks",
      email: "info@chnadikaelectricals.com",
      phoneNumber: "+00000000000"
    },
    {
      imageUrl: OurTeamImg4,
      profile: "Accountant",
      name: "Senorita Wilshere",
      email: "info@chnadikaelectricals.com",
      phoneNumber: "+00000000000"
    },
  ],
  teamHead1: "Our Team",
  teamHead2: "Meet our professional team members who are ever ready and up to the task of assisting you",
};

  return (

    <section id="contact">
    <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-blue-800 mb-2">
          {teamMembers.teamHead1}
        </h2>
        <p className="text-lg md:text-xl font-semibold text-black md:w-2/5 mx-auto">
        {teamMembers.teamHead2}
        </p>
      </div>
      <div className="flex md:flex-wrap md:justify-center overflow-x-auto" ref={teamRef}>
        {teamMembers.cards.map((member, index) => (
          <div key={index} className="sm:w-1/2 md:w-auto p-4">
            <div className="relative flex flex-col items-center md:mx-8 md:my-6 m-3"> 
              <img src={member.imageUrl} alt={member.name} className="w-full h-auto" />
              <div className="absolute w-32 text-center md:bottom-24 bottom-20 left-1/2 transform -translate-x-1/2 font-montserrat rounded
                              px-4 py-1 bg-blue-900 text-white text-xs font-semibold">
                {member.profile}
              </div>
              <p className="font-semibold font-montserrat text-base md:text-lg mt-3 mb-1">{member.name}</p>
              <div className="flex items-center w-full">
                <MdEmail className="mr-2 text-base md:text-lg" />
                <p className="text-sm font-montserrat md:text-base">{member.email}</p>
              </div>
              <div className="flex items-center w-full mt-1">
                <MdPhone className="mr-2 text-base md:text-lg" />
                <p className="text-sm font-montserrat md:text-base">{member.phoneNumber}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    </section>
  );
};

export default OurTeam;
