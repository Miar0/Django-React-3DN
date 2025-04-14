import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPetById } from '../utils/storage';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AnimalDetailPage = () => {
    const { id } = useParams();
    const pet = getPetById(id);

    if (!pet) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAF9] dark:bg-dark-fond text-red-600 dark:text-red-400">
                Тваринку не знайдено 😿
            </div>
        );
    }

    const sliderSettings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond px-4 py-10 md:px-12 max-w-[1440px] mx-auto">
            <Link
                to="/announcements"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-all ease-in-out cursor-pointer mb-4"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Повернутися до оголошень
            </Link>


            <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-[#1C1C2E] rounded-3xl shadow-md p-6">
                <div className="w-full md:w-1/2">
                    {pet.images && pet.images.length > 0 ? (
                        <Slider {...sliderSettings}>
                            {pet.images.map((src, idx) => (
                                <div key={idx} className="rounded-2xl overflow-hidden">
                                    <img src={src} alt={`Фото ${idx + 1}`} className="w-full h-[300px] object-cover rounded-xl" />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-400">Фото відсутні</p>
                    )}
                </div>

                <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#202857] dark:text-white mb-2">
                        {pet.name}
                    </h2>

                    <p className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-4">
                        {pet.healthStatus}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-sm md:text-base">
                        <p><strong>Тип:</strong> {pet.type}</p>
                        <p><strong>Порода:</strong> {pet.breed || '—'}</p>
                        <p><strong>Вік:</strong> {pet.age}</p>
                        <p><strong>Стать:</strong> {pet.gender}</p>
                    </div>

                    <div className="my-6 border-t pt-4 border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-1">Опис</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">{pet.description || '—'}</p>
                    </div>

                    <div className="border-t pt-4 border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-1">Контакт притулку</h3>
                        <p>{pet.contact}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-2xl text-center text-sm shadow-inner">
                {pet.healthStatus === 'Здоровий'
                    ? 'Ця тваринка готова до усиновлення 🐾'
                    : 'Тваринка потребує додаткового догляду 🩺'}
            </div>
        </div>
    );
};

export default AnimalDetailPage;
