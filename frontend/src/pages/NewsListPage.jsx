import React, { useState } from 'react';
import news from '../data/news';
import { Link } from 'react-router-dom';
import SortDropdown from '../components/SortDropdown';

const NewsListPage = () => {
    const [sortOption, setSortOption] = useState('newest');

    const sortedNews = [...news].sort((a, b) => {
        if (sortOption === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortOption === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortOption === 'title') return a.title.localeCompare(b.title);
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond text-[#1B1B1B] dark:text-white px-4 py-6 sm:py-8 md:py-10 max-w-[1440px] mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Останні новини</h1>

            <div className="flex justify-end mb-4 sm:mb-6">
                <SortDropdown
                    selected={sortOption}
                    onChange={setSortOption}
                    options={[
                        { value: 'newest', label: 'Найновіші' },
                        { value: 'oldest', label: 'Найстаріші' },
                        { value: 'title', label: 'По заголовку' }
                    ]}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {sortedNews.map(item => (
                    <Link
                        to={`/news/${item.id}`}
                        key={item.id}
                        className="bg-white dark:bg-[#1C1C2E] rounded-xl shadow-md hover:shadow-lg transition block overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-44 sm:h-48 object-cover"
                        />
                        <div className="p-3 sm:p-4">
                            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-[#202857] dark:text-white">{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{item.description}</p>
                            <p className="text-xs text-right text-gray-400 mt-3 sm:mt-4">{item.date}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NewsListPage;
