import React from 'react';
import { useParams, Link } from 'react-router-dom';
import news from '../data/news';
import CommentList from '../components/comments/CommentList';

const NewsDetailPage = () => {
    const { id } = useParams();
    const item = news.find(n => n.id.toString() === id);

    if (!item) {
        return (
            <div className="min-h-screen flex justify-center items-center text-red-600 dark:text-red-300">
                Новину не знайдено
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EDF2F7] dark:bg-dark-fond text-[#1B1B1B] dark:text-white mt-2 px-6 py-10 max-w-[1440px] mx-auto">
            <Link
                to="/news"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium
                hover:text-blue-800 dark:hover:text-blue-300 transition-all ease-in-out cursor-pointer mb-4"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Повернутися до оголошень
            </Link>

            <div className="bg-white dark:bg-[#1C1C2E] p-6 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold mb-2 max-w-3xl">{item.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.date}</p>

                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-xl mb-6 max-h-[450px] object-cover"
                />

                <div className="prose dark:prose-invert max-w-3xl whitespace-pre-line">
                    {item.content || item.description}
                </div>
            </div>

            <CommentList storageKey={`comments_news_${id}`} />
        </div>
    );
};

export default NewsDetailPage;
