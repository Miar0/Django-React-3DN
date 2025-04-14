import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import reviews from '../../data/reviews';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom';

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
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full
    shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
    >
        <FaChevronLeft className="text-[#202857]" />
    </button>
);

const CustomRightArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full
    shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
    >
        <FaChevronRight className="text-[#202857]" />
    </button>
);

const ReviewSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center bg-[#EDF2F7] dark:bg-dark-fond py-20 overflow-hidden rounded-lg">
            <h2 className="text-[32px] lg:text-[36px] font-semibold text-center text-[#202857] dark:text-[#C5C5C5] mb-10">
                Що люди думають про нас
            </h2>

            <div className="relative max-w-[1440px] w-full px-6">
                <CustomLeftArrow onClick={() => document.querySelector('.react-multi-carousel-list button[aria-label="Go to previous slide"]')?.click()} />
                <CustomRightArrow onClick={() => document.querySelector('.react-multi-carousel-list button[aria-label="Go to next slide"]')?.click()} />

                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={4000}
                    arrows={false}
                    containerClass="carousel-container"
                    itemClass="px-2"
                >
                    {reviews.map((review) => (
                        <div key={review.id} className="px-2">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </Carousel>
            </div>

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
