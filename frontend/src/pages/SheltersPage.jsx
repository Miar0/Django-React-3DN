import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import SortDropdown from '../components/SortDropdown';
import shelters from '../data/shelters';

const SheltersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

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
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond py-10 px-4 md:px-12">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1B1B1B] dark:text-white mb-8">
                Притулки для тварин
            </h1>

            {/* Фільтри */}
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8 bg-white dark:bg-[#1C1C2E] p-4 rounded-xl shadow-sm">
                <SearchInput
                    placeholder="Шукати за назвою або розташуванням"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SortDropdown
                    selected={sortOption}
                    onChange={setSortOption}
                />
            </div>

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
                        <p><span className="font-semibold">Тип:</span> {shelter.type}</p>
                        <p><span className="font-semibold">Розташування:</span> {shelter.location}</p>
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
