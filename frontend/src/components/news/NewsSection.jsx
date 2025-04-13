import React from 'react';
import news from '../../data/news';
import petsImage from '../../assets/images/news-home-second.png';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    return (
        <section className="relative  w-full py-8 px-4 lg:px-16 text-[#1B1B1B] dark:text-white bg-[--color-news-bg-light] dark:bg-transparent">
            {/* Заголовок */}
            <div className="flex justify-center mb-12">
                <div className="w-[522px] h-[60px] flex items-center justify-center rounded-md
                bg-white shadow-md dark:border-white/10  backdrop-blur-md  dark:bg-[#9C9AFCCC]/10">
                    <h2 className="text-[36px] font-semibold text-center text-[#202857] dark:text-[#C5C5C5] ">
                        Пухнасті новини
                    </h2>
                </div>
            </div>

            {/* Контент */}
            <div
                className="max-w-[1220px] mx-auto flex flex-col lg:flex-row gap-4 bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl p-4 shadow-xl dark:shadow-none">
                {/* Новини */}
                <div className="w-[703px] flex flex-col gap-4">
                    {news.map((item) => (
                        <Link
                            to={`/news/${item.id}`}
                            key={item.id}
                            className="group block w-[703px] h-[168px] relative rounded-xl overflow-hidden
                            border border-[#3F3D9C]/10 dark:border-white/5 shadow-sm
                            transition-all duration-300 ease-out
                            hover:bg-[--color-news-hover-light] dark:hover:bg-white/10
                            hover:shadow-xl hover:scale-[1.02] animate-fade-in-scale
                            before:absolute before:left-0 before:top-4 before:bottom-4 before:w-1 before:rounded-xl
                            before:bg-gradient-to-b before:from-[#9C9AFC] before:to-[#3F3D9C] before:opacity-0
                            group-hover:before:opacity-100"
                        >
                            <div className="flex gap-4 w-full h-full p-4">
                                <div className="w-[168px] h-full overflow-hidden rounded-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out
                                        group-hover:scale-105 group-hover:shadow-md"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                                    <p className="text-xs text-gray-500 dark:text-gray-300">{item.date}</p>
                                    <h3 className="text-base font-semibold leading-snug text-[--color-news-accent] dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Зображення справа */}
                <div className="flex-1 flex justify-end items-start mr-2">
                    <div className="w-full max-w-[444px] h-full overflow-hidden rounded-2xl group">
                        <img
                            src={petsImage}
                            alt="Pets"
                            className="w-full h-full object-cover rounded-2xl shadow-xl
                            transition-transform duration-500 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Кнопка */}
            <div className="flex justify-center mt-10">
                <Link to="/news" className="group">
                    <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-[--color-news-accent] text-[--color-news-accent]
                    bg-white shadow-md transition hover:bg-[#ECEBFF] hover:scale-105 active:scale-95 focus-visible:ring-2
                    dark:border-white dark:text-white dark:bg-transparent dark:hover:bg-white/10">
                        Дізнатись більше
                        <span className="transition-transform duration-300 group-hover:translate-x-1">➜</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default NewsSection;
