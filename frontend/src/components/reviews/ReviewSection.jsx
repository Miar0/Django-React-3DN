import React, {useRef, useEffect, useState} from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import reviews from '../../data/reviews';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom';

const CARD_WIDTH = 300;
const GAP = 16;

const ReviewSection = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

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

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % reviews.length);
    };

    return (
        <section
            className="relative flex flex-col items-center justify-center bg-[#EDF2F7] dark:bg-dark-fond overflow-hidden pt-35 pb-44">
            {/* Заголовок */}
            <h2 className="text-[32px] lg:text-[36px] font-semibold text-center text-[#202857] dark:text-[#C5C5C5] mb-16">
                Що люди думають про нас
            </h2>

            {/* Карусель */}
            <div className="relative flex flex-row items-center justify-center max-w-[1440px] mx-auto ">
                {/* Стрілка вліво */}
                <button
                    onClick={handlePrev}
                    className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer"
                >
                    <FaChevronLeft className="text-[#202857]"/>
                </button>

                {/* Обгортка для скролу */}
                <div className="overflow-hidden">
                    <div ref={containerRef}>
                        <div
                            className="flex items-center justify-center pl-4 pr-4 will-change-transform py-4 "
                            style={{
                                gap: `${GAP}px`,
                                width: `${reviews.length * (CARD_WIDTH + GAP)}px`,
                            }}
                        >
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="flex-shrink-0"
                                    style={{width: `${CARD_WIDTH}px`}}
                                >
                                    <ReviewCard review={review}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Стрілка вправо */}
                <button
                    onClick={handleNext}
                    className="absolute -right-7 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer"
                >
                    <FaChevronRight className="text-[#202857]"/>
                </button>
            </div>

            {/* Кнопка "Написати відгук" */}
            <div className="flex justify-center items-center mt-14">
                <Link to="/reviews" className="group">
                    <button
                        className="flex items-center gap-2 px-8 py-3 rounded-full border border-[--color-news-accent] text-[--color-news-accent]
                    bg-white shadow-md transition hover:bg-[#ECEBFF] hover:scale-105 active:scale-95 focus-visible:ring-2
                    dark:border-white dark:text-white dark:bg-transparent dark:hover:bg-white/10 cursor-pointer"
                    >
                        Написати відгук
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ReviewSection;
