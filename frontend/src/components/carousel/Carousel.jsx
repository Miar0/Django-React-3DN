import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselLib from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PetCard from './PetCard';
import petsData from '../../data/pets';
import { getPetsFromStorage } from '../../utils/storage';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const CustomLeftArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md
     cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
    >
        <FaChevronLeft className="text-[#202857]" />
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md
     cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
    >
        <FaChevronRight className="text-[#202857]" />
    </button>
);

const Carousel = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const localPets = getPetsFromStorage() || [];
        const localIds = new Set(localPets.map(p => p.id));
        const merged = [...localPets, ...petsData.filter(p => !localIds.has(p.id))];
        setPets(merged);
    }, []);

const Carousel = () => {
    return (
        <section className="bg-[#EDF2F7] dark:bg-dark-fond py-12 mt-20">
            <div className="max-w-[1440px] mx-auto px-6 pb-14 flex flex-col justify-center">
                <h2 className="text-[32px] text-[#202857] font-medium text-center mb-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.23)] dark:text-white">
                    Зазирніть до наших улюбленців
                </h2>

                <div className="relative">
                    <CarouselLib
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3500}
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        containerClass="carousel-container"
                        itemClass="px-2"
                        arrows={true}
                        renderDotsOutside={false}
                    >
                        {pets.map((pet) => (
                            <div key={pet.id} className="px-2">
                                <PetCard pet={pet} />
                            </div>
                        ))}
                    </CarouselLib>
                </div>

                <div className="flex justify-center items-center mt-10">
                    <Link to="/announcements" className="group">
                        <button
                            className="flex items-center gap-2 px-8 py-3 rounded-full border border-[--color-news-accent] text-[--color-news-accent]
              bg-white shadow-md transition hover:bg-[#ECEBFF] hover:scale-105 active:scale-95 focus-visible:ring-2
              dark:border-white dark:text-white dark:bg-transparent dark:hover:bg-white/10 cursor-pointer"
                        >
                            Більше
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Carousel;
