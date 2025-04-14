import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import pets from '../../data/pets';
import PetCard from './PetCard';
import {Link} from "react-router-dom";

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const CARD_WIDTH = 300; // px — ширина однієї картки
    const GAP = 24; // px — проміжок між картками
    const VISIBLE_CARDS = 4;

    const scrollToIndex = (i) => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: i * (CARD_WIDTH + GAP),
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        scrollToIndex(index);
    }, [index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % pets.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + pets.length) % pets.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % pets.length);
    };

    return (
        <section className="bg-[#EDF2F7] dark:bg-dark-fond py-12 mt-20">
            <div className="max-w-[1440px] mx-auto px-19 pb-14 flex flex-col justify-center ">
                <h2 className="text-[32px] text-[#202857] font-medium text-center mb-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.23)]
                dark:text-white">
                    Зазирніть до наших улюбленців
                </h2>

                <div className="relative justify-center">
                    <button
                        onClick={handlePrev}
                        className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full
                        shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        <FaChevronLeft className="text-[#202857]"/>
                    </button>
                    <div
                        ref={containerRef}
                        className="relative w-full overflow-hidden"
                    >
                        {/* Лінійка з картками */}
                        <div
                            className="flex px-4 will-change-transform py-4"
                            style={{
                                gap: `${GAP}px`,
                                width: `${pets.length * (CARD_WIDTH + GAP)}px`,
                            }}
                        >
                            {pets.map((pet, idx) => (
                                <div
                                    key={pet.id}
                                    className="flex-shrink-0"
                                    style={{width: `${CARD_WIDTH}px`}}
                                >
                                    <PetCard pet={pet}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full
                         shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        <FaChevronRight className="text-[#202857]"/>
                    </button>
                </div>

                <div className="flex justify-center items-center mt-10 ">
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