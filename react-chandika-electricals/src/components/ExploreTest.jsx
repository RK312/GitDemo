import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import ExploreImg1 from '../assets/images/ExploreImg1.png';
import ExploreImg2 from '../assets/images/ExploreImg2.png';
import ExploreImg3 from '../assets/images/ExploreImg3.png';
import ExploreImg4 from '../assets/images/ExploreImg4.png';
import ExploreImg5 from '../assets/images/ExploreImg5.png';
import ExploreImg6 from '../assets/images/ExploreImg6.png';

const testimonialData = [
      {
            quote: `"If you are looking for a company that is ethical then your search is over."`,
            description: "Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.",
            author: "Kathleen Meade",
            role: "Homeowner",
            imagePath: ExploreImg1,
      },
      {
            quote: `“They consistently do exemplary work each time they have been in our home.”`,
            description: "There should be a special six-star rating category for professionals like the employees of Electrician...",
            author: "Darren J. Napier",
            role: "Homeowner",
            imagePath: ExploreImg2,
      },
      {
            quote: `“Great service and great technicians!”`,
            description: "Came with an accurate list and worked in different parts of the house to accommodate social distancing for my dad. Made allowances for carers visits and trips on the stair lift.",
            author: "Jesus Erickson",
            role: "Homeowner",
            imagePath: ExploreImg3,
      },
      {
            quote: `“They were great. Very responsive and flexible with my schedule.”`,
            description: "I have three group homes located in the Richmond area that have portable generators. Due to the nature of the individuals we serve it is...",
            author: "Ben Sims",
            role: "Homeowner",
            imagePath: ExploreImg4,
      },
      {
            quote: `“They are the best of the best and we continue to recommend them”`,
            description: "Work completed was of great quality. The team are knowledgeable and efficient. I have used them on multiple projects, and they always deliver.",
            author: "Nettie Marsh",
            role: "Homeowner",
            imagePath: ExploreImg5,
      },
      {
            quote: `“You guys are the best!”`,
            description: "Great prompt, friendly service. Price quoted was the price paid. Lovely Electricians who still had a sense of humour while wearing respirator masks. Thanks will definitely use again and recommend.",
            author: "Jeffrey Smith",
            role: "Homeowner",
            imagePath: ExploreImg6,
      },
];

const ExploreTest = () => {

      const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 640); // Adjust this breakpoint as needed
      const maxCardsMedium = 3;
      const loopCount = Math.ceil(testimonialData.length / maxCardsMedium);

      useEffect(() => {
            const handleResize = () => {
                  setIsSmallDevice(window.innerWidth < 640);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                  window.removeEventListener('resize', handleResize);
            };
      }, []);

      const cardTest = (testimonial, index) => (
            <div key={index} className="m-8 p-4 min-h-[22rem] min-w-72 md:h-[22rem] md:w-72 lg:w-80 border-2 rounded-lg 
                                                        shadow-lg overflow-hidden bg-gray-100">
                  <div className="font-baumans h-12 text-5xl text-blue-600">
                        <FaQuoteLeft />
                  </div>
                  <div className="font-montserrat font-semibold h-28 text-xl overflow-hidden">
                        {testimonial.quote}
                  </div>
                  <div className="font-montserrat pt-2 h-24 text-sm overflow-hidden">
                        {testimonial.description}
                  </div>
                  <div className="flex flex-row h-20">
                        <div className="flex w-20 items-center justify-center">
                              <img src={testimonial.imagePath} alt="Profile Image"
                                    className="w-auto h-auto rounded-full" />
                        </div>
                        <div className="flex-1 flex-row">
                              <p className="font-montserrat font-semibold mt-4">
                                    {testimonial.author}
                              </p>
                              <p className="font-montserrat text-xs">
                                    {testimonial.role}
                              </p>
                        </div>
                  </div>
            </div>
      );

      return (
            <section>
                  <div className="font-montserrat font-bold text-center md:text-2xl text-blue-700">
                        A Reputation You Can Count On
                  </div>
                  <div className="m-2 font-montserrat font-bold text-center md:text-5xl">
                        Explore Some of Our Testimonials!
                  </div>
                  <div className="md:mx-96 px-4 font-montserrat text-center md:text-lg">
                        Here are a few testimonials and reviews from our customers - we're sure you will feel the
                        same when we work with you.
                  </div>
                  <div className={`md:m-0 m-2 overflow-x-${isSmallDevice ? 'auto' : 'hidden'} 
                                   md:flex md:justify-center`}>
                        {isSmallDevice ? 
                        (
                              <div className="flex">
                                    {testimonialData.map((testimonial, index) => 
                                    (
                                          cardTest(testimonial, index)
                                    ))}
                              </div>
                        ) : 
                        (
                              <div className="flex flex-wrap justify-center">
                                    {Array.from({ length: loopCount }, (_, i) => (
                                          <div key={i} className="flex justify-center">
                                                {testimonialData.slice(i * maxCardsMedium, 
                                                (i + 1) * maxCardsMedium).map((testimonial, index) => 
                                                (
                                                      cardTest(testimonial, index)
                                                ))}
                                          </div>
                                    ))}
                              </div>
                        )}
                  </div>
            </section>
      );
}

export default ExploreTest;
