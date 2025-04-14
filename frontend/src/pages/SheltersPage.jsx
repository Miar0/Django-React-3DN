import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shelters from '../data/shelters';
import Filters from '../components/Filters';

const  SheltersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('newest');

    const filtered = shelters.filter(shelter =>
        shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shelter.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = [...filtered].sort((a, b) => {
        if (sortOption === 'name') return a.name.localeCompare(b.name);
        if (sortOption === 'newest') return b.id - a.id;
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#EDF2F7] mt-2 dark:bg-dark-fond text-[#1B1B1B] dark:text-white px-4 py-6 sm:py-8 md:py-10 max-w-[1440px] mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Притулки для тварин</h1>

            <Filters
                sortOption={sortOption}
                setSortOption={setSortOption}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />


            {/* Картки притулків */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sorted.map(shelter => (
                    <div
                        key={shelter.id}
                        className="bg-white dark:bg-[#1C1C2E] rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform duration-300"
                    >
                        <h3 className="text-xl font-semibold text-[#202857] dark:text-white mb-2">
                            {shelter.name}
                        </h3>
                        <p className="text-[#202857] dark:text-white"><span className="font-semibold">Тип:</span> {shelter.type}</p>
                        <p className="text-[#202857] dark:text-white"><span className="font-semibold">Розташування:</span> {shelter.location}</p>
                        {shelter.website && (
                            <p className="text-blue-500 underline">
                                <a href={`https://${shelter.website}`} target="_blank" rel="noreferrer">
                                    {shelter.website}
                                </a>
                            </p>
                        )}
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                            {shelter.description}
                        </p>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                            {shelter.available} тварина{+shelter.available === 1 ? '' : shelter.available === 0 ? '' : 'и'} доступна
                        </p>

                        <Link to={`/shelters/${shelter.id}`}>
                            <button className="w-full cursor-pointer mt-4 py-2 bg-[#2563EB] text-white rounded-full hover:bg-[#1E40AF] transition">
                                Перейти до притулку
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SheltersPage;
