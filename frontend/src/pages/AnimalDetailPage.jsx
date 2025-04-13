import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pets from '../data/pets';

const AnimalDetailPage = () => {
    const { id } = useParams();
    const pet = pets.find((p) => p.id === parseInt(id));

    if (!pet) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F8FAF9] dark:bg-dark-fond text-red-600 dark:text-red-400">
                Тваринку не знайдено 😿
            </div>
        );
    }

    return (
        <div className="min-h-screen dark:bg-dark-fond px-4 py-10 md:px-12 max-w-[1440px] mx-auto ">
            <Link to="/announcements" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 block">
                ← Повернутися до оголошень
            </Link>

            <div className="flex flex-col md:flex-row gap-10 items-start bg-white dark:bg-[#1C1C2E] rounded-3xl shadow-md p-6">
                {/* Фото */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                        src={pet.image}
                        alt={pet.name}
                        className="rounded-2xl w-full h-auto object-cover shadow-md"
                    />
                </div>

                {/* Інформація */}
                <div className="w-full md:w-1/2 text-gray-800 dark:text-gray-200">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-[#202857] dark:text-white mb-2">
                        {pet.name}
                    </h2>

                    <p className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-4">
                        Healthy
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base">
                        <div><span className="font-semibold">Тип:</span> {pet.type || 'Невідомо'}</div>
                        <div><span className="font-semibold">Порода:</span> random</div>
                        <div><span className="font-semibold">Вік:</span> random</div>
                        <div><span className="font-semibold">Стать:</span> random</div>
                    </div>

                    <div className="my-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <h3 className="font-semibold text-lg mb-1">Про тваринку</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            No description provided.
                        </p>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <h3 className="font-semibold text-lg mb-1">Інформація про притулок</h3>
                        <p>Брюховичі Вет</p>
                        <p>Location: random</p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <button className="bg-[#2563EB] text-white px-4 py-2 rounded-full hover:bg-[#1E40AF] transition">
                            Зв’язатися з притулком
                        </button>
                        <Link
                            to="/shelters/2"
                            className="bg-gray-200 dark:bg-[#2F2F44] text-[#202857] dark:text-white px-4 py-2 rounded-full hover:opacity-90"
                        >
                            Перейти до притулку
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-2xl text-center text-sm shadow-inner">
                Ця тваринка здорова та готова до усиновлення 🐾
            </div>
        </div>
    );
};

export default AnimalDetailPage;
