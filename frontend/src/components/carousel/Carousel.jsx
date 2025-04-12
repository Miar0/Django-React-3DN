import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import pets from '../../data/pets';
import PetCard from './PetCard';

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
        <section className="bg-[#EDF2F7] dark:bg-dark-fond py-12">
            <div className="max-w-[1440px] mx-auto px-19 mt-12 ">
                <h2 className="text-[32px] text-[#202857] font-medium text-center mb-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.23)]
                dark:text-white">
                    Зазирніть до наших улюбленців
                </h2>

                <div className="relative justify-center">
                    {/* Стрілка вліво */}
                    <button
                        onClick={handlePrev}
                        className="absolute -left-15 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                    >
                        <FaChevronLeft className="text-[#202857]"/>
                    </button>

                    {/* Картки */}
                    {/* Вікно-контейнер */}
                    <div
                        ref={containerRef}
                        className="relative w-full overflow-hidden"
                    >
                        {/* Лінійка з картками */}
                        <div
                            className="flex pl-4 pr-4 will-change-transform py-4"
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


                    {/* Стрілка вправо */}
                    <button
                        onClick={handleNext}
                        className="absolute -right-15 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                    >
                        <FaChevronRight className="text-[#202857]"/>
                    </button>
                </div>

                <div className="flex justify-center items-center mt-10 ">
                    <div
                        className="relative  rounded-full p-[2px] bg-gradient-to-r from-[#4658BD] to-[#202857] custom-shadow">
                        <button
                            className="flex justify-center items-center w-40 h-11 px-10 py-3 cursor-pointer bg-[#EDF2F7] dark:bg-dark-fond text-base font-semibold rounded-full text-[#202857] dark:text-white shadow-lg">
                            Більше
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;