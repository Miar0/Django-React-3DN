import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import news from '../data/news';
import { format } from 'date-fns';

const NewsDetailPage = () => {
    const { id } = useParams();
    const item = news.find((n) => n.id === Number(id));

    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;

        const newComment = {
            id: Date.now(),
            name,
            text: comment,
            date: format(new Date(), 'dd.MM.yyyy, HH:mm:ss'),
        };
        setComments((prev) => [...prev, newComment]);
        setName('');
        setComment('');
    };

    if (!item) return <div className="text-center py-10 text-red-500">Новина не знайдена</div>;

    return (
        <div className="min-h-screen bg-[#EDF2F7] dark:bg-dark-fond text-[#1B1B1B] dark:text-white px-4 py-6 sm:py-8 md:py-10 max-w-[768px] mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">{item.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">{item.date}</p>

            <img
                src={item.image}
                alt={item.title}
                className="w-full max-h-[400px] object-cover rounded-xl shadow-md mb-6"
            />

            <p className="text-base leading-relaxed whitespace-pre-line mb-10">{item.content}</p>

            <h2 className="text-xl font-semibold mb-3">Коментарі</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше ім’я"
                    className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
                />
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Ваш коментар..."
                    className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-white"
                    rows={3}
                />
                <button
                    type="submit"
                    className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-6 py-2 rounded-full transition"
                >
                    Надіслати
                </button>
            </form>

            {comments.map((c) => (
                <div
                    key={c.id}
                    className="bg-white dark:bg-[#1C1C2E] rounded-lg shadow-md p-4 mb-4"
                >
                    <div className="flex justify-between mb-1">
                        <span className="font-semibold text-[#202857] dark:text-white">{c.name}</span>
                        <span className="text-xs text-gray-500">{c.date}</span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-300">{c.text}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsDetailPage;
