import React from 'react';
import pets from '../assets/images/pets.png';
import greenEllipse from '../assets/icons/green-ellipse.svg';
import blueEllipse from '../assets/icons/blue-ellipse.svg';
import rightBlueEllipse from '../assets/icons/right-blue-ellipse.svg';
import Carousel from '../components/carousel/Carousel';
import WhyUsSection from '../components/WhyUsSection';
import ReviewSection from '../components/reviews/ReviewSection';
import NewsSection from '../components/news/NewsSection';
import landingCat2 from '../assets/images/landingCat2.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <section className="min-h-[calc(100vh-88px)] bg-[#EDF2F7] dark:bg-dark-fond relative flex flex-col items-center
            justify-start overflow-hidden pt-15 sm:pt-20 sm:flex-row sm:justify-between sm:items-center
            ">
                {/* Background Ellipses */}
                <img src={greenEllipse} alt="ellipse" className="hidden sm:block absolute -bottom-60 -right-32 z-0" />
                <img src={blueEllipse} alt="ellipse" className="hidden sm:block absolute -bottom-44 -left-48 z-0
                 sm:right-[900px] sm:-bottom-5 2xl:bottom-100 2xl:right-[1400px]" />
                <img src={rightBlueEllipse} alt="ellipse" className="hidden sm:block absolute -bottom-52 left-[700px]
                 z-0 sm:left-[900px] sm:-bottom-5 2xl:bottom-100 2xl:left-[1400px]" />

                <div className="max-w-[1440px] 2xl:mx-auto w-full lg:ml-25 px-4 flex flex-col items-center text-center z-10  sm:flex-row sm:text-left
                sm:items-start sm:gap-10 sm:justify-between">

                    {/* Left side */}
                    <div className="flex-1 flex flex-col items-center mt-[-29px] xl:mt-[0px] sm:items-start sm: order-1 sm:order-none
                                    xl:mb-46">
                            <h1 className="text-[32px] sm:text-[42px] lg:whitespace-nowrap lg:text-[80px]
                             xl:text-[50px]
                             font-extrabold leading-tight
                             tracking-wide bg-[linear-gradient(to_right,#202857,#4658BD)]
                             dark:bg-[linear-gradient(135deg,_#8BBD8E_20%,_#FFFFFF_99%)]
                             bg-clip-text text-transparent mb-4">
                                Допоможи лапкам знайти дім
                            </h1>
                            <p className="text-[16px] sm:text-[18px]  xl:text-[20px] lg:text-[20px] lg:max-w-3xl
                            xl:max-w-xl xl:text-[20px]
                             text-black dark:text-white max-w-md sm:max-w-xl font-light tracking-wide leading-relaxed">
                                Стань тим, хто подарує безпритульній тваринці не лише дах над головою, а й тепло, турботу та
                                <span className="text-[#3DA435] dark:text-[#8BFA92]"> нове життя.</span>
                            </p>
                        {/* IMAGE (тільки на мобілках перед кнопками) */}
                        <div className="mt-8 sm:hidden relative">
                            <img src={pets} alt="Pets" className="w-[340px]  h-auto  object-contain pb-3 z-10 ml-[110px]" />
                        </div>

                        {/* Блок мобільної адаптації: кнопки */}
                        <div
                            className="sm:hidden flex flex-row absolute justify-between items-center top-50 right-28 w-full">
                            <img src={landingCat2} alt="Pets"
                                 className="w-[180px]  h-auto  object-contain z-10 ml-[110px]"/>
                            {/*/!* Кнопки зліва *!/*/}
                            {/*<div className="flex flex-col gap-4 mt-[-430px]  ml-[-20px]">*/}
                            {/*    <Link to="/announcements">*/}
                            {/*        <button className="w-[160px] h-[44px] rounded-full bg-gradient-to-r from-[#4658BD] to-[#202857] text-white font-semibold text-sm shadow-[0_4px_20px_rgba(104,109,224,0.5)]">*/}
                            {/*            Обрати улюбленця*/}
                            {/*        </button>*/}
                            {/*    </Link>*/}
                            {/*    <Link to="/shelters">*/}
                            {/*        <button className="w-[170px] h-[44px] whitespace-nowrap rounded-full border border-[#202857] text-[#202857] bg-white font-semibold text-sm shadow-[0_4px_20px_rgba(104,109,224,0.5)]">*/}
                            {/*            Передати в добрі руки*/}
                            {/*        </button>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                        </div>


                        {/* Buttons */}
                        <div className="py-22 sm:flex -mt-26 lg:mt-20 flex flex-row gap-4 sm:flex-row sm:justify-start
                        xl:py-18 xl:gap-8 ">
                            <Link to="/announcements">
                                <button className="w-[170px] h-[50px] sm:w-[250px] sm:h-[50px] rounded-full cursor-pointer bg-gradient-to-r from-[#4658BD] to-[#202857] text-white font-semibold shadow-[0_4px_20px_rgba(104,109,224,0.5)]">
                                    Обрати улюбленця
                                </button>
                            </Link>
                            <Link to="/shelters">
                                <button className="w-[180px] h-[50px] sm:w-[250px] sm:h-[50px] rounded-full cursor-pointer border border-[#202857] text-[#202857] bg-white font-semibold shadow-[0_4px_20px_rgba(104,109,224,0.5)]">
                                    Передати в добрі руки
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* IMAGE on desktops */}
                    <div className="hidden sm:flex flex-1 justify-center items-center xl:ml-[-300px] xl:pt-[60px] ">
                        <img src={pets} alt="Pets" className="lg:max-w-[700px] object-contain z-10
                                        xl:max-w-[900px] xl:h-[600px]
                                        2xl:max-w-[1400px] 2xl:h-[600px]" />
                    </div>
                </div>
            </section>

            <Carousel />
            <WhyUsSection />
            <ReviewSection />
            <NewsSection />
        </>
    );
};

export default HomePage;
