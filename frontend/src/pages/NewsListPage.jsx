import React, { useState } from 'react';
import news from '../data/news';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Filters from '../components/Filters';

const NewsListPage = () => {
    const [sortOption, setSortOption] = useState('newest');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const PER_PAGE = 6;

    const filteredNews = news.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedNews = [...filteredNews].sort((a, b) => {
        if (sortOption === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortOption === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortOption === 'title') return a.title.localeCompare(b.title);
        return 0;
    });

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(sortedNews.length / PER_PAGE);
    const currentItems = sortedNews.slice(offset, offset + PER_PAGE);

    const handlePageChange = ({ selected }) => setCurrentPage(selected);
    return (
        <div className="min-h-screen bg-[#EDF2F7] mt-2 dark:bg-dark-fond text-[#1B1B1B] dark:text-white px-4 py-6 sm:py-8 md:py-10 max-w-[1440px] mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Останні новини</h1>

            <Filters
                sortOption={sortOption}
                setSortOption={setSortOption}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <div
                key={currentPage}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-opacity duration-300 animate-fade-in"
            >
                {currentItems.map(item => (
                    <Link
                        to={`/news/${item.id}`}
                        key={item.id}
                        className="bg-white dark:bg-[#1C1C2E] rounded-3xl shadow hover:shadow-lg transition block overflow-hidden border border-gray-100 dark:border-[#2C2C3B]"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-52 sm:h-56 lg:h-60 object-cover rounded-t-3xl"
                        />
                        <div className="p-4 sm:p-5">
                            <h3 className="text-lg font-semibold mb-2 text-[#202857] dark:text-white leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                                {item.description}
                            </p>
                            <p className="text-xs text-right text-gray-400 mt-4">{item.date}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
            </div>
        </div>
    );
};

export default NewsListPage;
