import React from 'react';
import pets from '../assets/images/pets.png'
// import petsCard from '../components/carousel/PetCard.jsx';
import greenEllipse from '../assets/icons/green-ellipse.svg';
import blueEllipse from '../assets/icons/blue-ellipse.svg';
import rightBlueEllipse from '../assets/icons/right-blue-ellipse.svg';
import Carousel from '../components/carousel/Carousel';
import WhyUsSection from '../components/WhyUsSection';
import ReviewSection from '../components/reviews/ReviewSection';
import NewsSection from '../components/news/NewsSection';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <>

            <section
                className="min-h-[calc(100vh-88px)] bg-[#EDF2F7] dark:bg-dark-fond flex flex-col-reverse lg:flex-row items-center justify-center relative overflow-hidden px-4 sm:px-8">
                {/* Background ellipses */}
                <img
                    src={greenEllipse}
                    alt="decorative path"
                    width={900}
                    height={600}
                    className="absolute -bottom-67 -right-22 z-0 max-sm:hidden"
                />
                <img
                    src={blueEllipse}
                    alt="decorative path"
                    width={900}
                    height={600}
                    className="absolute -bottom-50 -left-45 z-0 max-sm:hidden"
                />
                <img
                    src={rightBlueEllipse}
                    alt="decorative path"
                    width={900}
                    height={600}
                    className="absolute -bottom-50 left-180 z-0 max-sm:hidden"
                />

                {/* Container */}
                <div
                    className="max-w-[1440px] w-full flex flex-col lg:flex-row items-center justify-between z-10 gap-8">

                    {/* Left block */}
                    <div className="flex-1 flex flex-col justify-center text-left">
                        <h1 className="text-[32px] sm:text-[44px] md:text-[60px] font-extrabold leading-tight tracking-wide bg-[linear-gradient(to_right,#202857,#4658BD)]
      dark:bg-[linear-gradient(135deg,_#8BBD8E_20%,_#FFFFFF_99%)] bg-clip-text text-transparent mb-6">
                            Допоможи лапкам знайти дім
                        </h1>

                        <p className="text-base sm:text-lg md:text-[20px] text-black dark:text-white font-light leading-tight tracking-wide max-w-2xl">
                            Стань тим, хто подарує безпритульній тваринці не лише дах над
                            головою, а й тепло, турботу та
                            <span className="text-[#3DA435] dark:text-[#8BFA92]"> нове життя.</span>
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-col sm:flex-row gap-4 sm:gap-9 mt-8 w-full">
                            <Link to={'/announcements'} className="w-full sm:w-auto">
                                <button
                                    className="w-full sm:w-[250px] h-[50px] rounded-full shadow-[0_4px_20px_rgba(104,109,224,0.5)] primary-btn text-white">
                                    Обрати улюбленця
                                </button>
                            </Link>
                            <Link to={'/shelters'} className="w-full sm:w-auto">
                                <button
                                    className="w-full sm:w-[250px] h-[50px] rounded-full bg-white border border-[#202857] text-[#202857] shadow-[0_4px_20px_rgba(104,109,224,0.5)]">
                                    Передати в добрі руки
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right block */}
                    <div
                        className="flex-1 flex justify-center items-center relative w-full max-w-[420px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[700px]">
                        <img
                            src={pets}
                            alt="Pets illustration"
                            className="w-full h-auto object-contain z-10"
                        />
                    </div>
                </div>
            </section>
            <Carousel/>
            <WhyUsSection/>
            <ReviewSection/>
            <NewsSection/>
        </>
    );
};

export default HomePage;
