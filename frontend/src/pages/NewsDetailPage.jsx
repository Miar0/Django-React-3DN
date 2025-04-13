import React from 'react';
import { useParams, Link } from 'react-router-dom';
import news from '../data/news';

const NewsDetailPage = () => {
    const { id } = useParams();
    const item = news.find(n => n.id === parseInt(id));

    if (!item) {
        return (
            <div className="min-h-screen flex justify-center items-center text-red-600 dark:text-red-300">
                Новину не знайдено
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EDF2F7] dark:bg-dark-fond text-[#1B1B1B] dark:text-white mt-2 px-6 py-10 max-w-[1440px] mx-auto">
            <Link to="/news" className="text-blue-600 dark:text-blue-400 underline mb-6 block">
                ← Повернутися до новин
            </Link>

            <h1 className="text-3xl font-bold mb-4 max-w-3xl">{item.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{item.date}</p>

            <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl mb-6 max-h-[450px] object-cover"
            />

            <div className="prose dark:prose-invert max-w-3xl">
                <p>{item.description}</p>
                <p>
                    Тут буде повний текст новини. Можна розширити його полем `content` у файлі
                    <code>news.js</code>, або реалізувати Markdown/редактор/коментарі.
                </p>
            </div>
        </div>
    );
};

export default NewsDetailPage;
