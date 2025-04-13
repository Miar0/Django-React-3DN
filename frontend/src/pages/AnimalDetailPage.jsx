import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPetById } from '../utils/storage';

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

    return (
        <div className="min-h-screen dark:bg-dark-fond px-4 py-10 md:px-12 max-w-[1440px] mx-auto">
            <Link to="/announcements" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 block">
                ← Повернутися до оголошень
            </Link>

            <div className="flex flex-col md:flex-row gap-10 bg-white dark:bg-[#1C1C2E] rounded-3xl shadow-md p-6">
                {/* Галерея */}
                <div className="flex-shrink-0 w-full md:w-1/2 grid grid-cols-1 gap-4">
                    {pet.images.map((src, idx) => (
                        <img key={idx} src={src} alt={`Фото ${idx + 1}`} className="rounded-2xl w-full object-cover shadow" />
                    ))}
                </div>

                {/* Інфо */}
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
                Ця тваринка {pet.healthStatus === 'Здоровий' ? 'готова до усиновлення 🐾' : 'потребує додаткового догляду 🩺'}
            </div>
        </div>
    );
};

export default AnimalDetailPage;
