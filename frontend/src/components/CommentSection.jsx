import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'news_comments';

const CommentSection = ({ newsId }) => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        setComments(data[newsId] || []);
    }, [newsId]);

    const handleAddComment = (e) => {
        e.preventDefault();
        if (!name.trim() || !text.trim()) return;

        const newComment = {
            name,
            text,
            date: new Date().toISOString(),
        };

        const updatedComments = [...comments, newComment];
        setComments(updatedComments);

        const all = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        all[newsId] = updatedComments;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));

        setName('');
        setText('');
    };

    return (
        <div className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold mb-4">Коментарі</h2>

            <form onSubmit={handleAddComment} className="mb-6 space-y-3">
                <input
                    type="text"
                    placeholder="Ваше ім’я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                />
                <textarea
                    placeholder="Ваш коментар..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-black dark:text-white resize-none"
                    rows={3}
                ></textarea>
                <button
                    type="submit"
                    className="bg-[#2563EB] text-white py-2 px-6 rounded-full hover:bg-[#1E40AF] transition cursor-pointer"
                >
                    Надіслати
                </button>
            </form>

            <div className="space-y-4">
                {comments.length === 0 && <p className="text-gray-400">Коментарів ще немає.</p>}
                {comments.map((c, i) => (
                    <div key={i} className="bg-white dark:bg-[#1C1C2E] p-4 rounded-xl shadow">
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="font-semibold text-[#202857] dark:text-white">{c.name}</h4>
                            <span className="text-xs text-gray-400">{new Date(c.date).toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{c.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
