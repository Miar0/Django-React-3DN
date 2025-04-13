import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import news from '../data/news';
import SortDropdown from '../components/SortDropdown';
import { Heart, MessageCircle, Pencil, Trash2 } from 'lucide-react';

const NewsDetailPage = () => {
    const { id } = useParams();
    const item = news.find(n => n.id.toString() === id);

    const [sortCommentsBy, setSortCommentsBy] = useState('newest');
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [likedComments, setLikedComments] = useState({});

    useEffect(() => {
        const stored = localStorage.getItem(`comments_news_${id}`);
        if (stored) setComments(JSON.parse(stored));
    }, [id]);

    useEffect(() => {
        localStorage.setItem(`comments_news_${id}`, JSON.stringify(comments));
    }, [comments, id]);

    const sortedComments = [...comments].sort((a, b) => {
        if (sortCommentsBy === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortCommentsBy === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortCommentsBy === 'author') return a.author.localeCompare(b.author);
        return 0;
    });

    const handleAddComment = () => {
        if (!commentText.trim()) return;
        const newComment = {
            id: Date.now(),
            author: 'Анонім',
            text: commentText,
            date: new Date().toISOString(),
            likes: 0,
            replies: []
        };
        setComments(prev => [newComment, ...prev]);
        setCommentText('');
    };

    const handleLike = (id) => {
        if (likedComments[id]) return;
        setComments(prev => prev.map(comment => comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment));
        setLikedComments(prev => ({ ...prev, [id]: true }));
    };

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

            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Коментарі</h2>

                <SortDropdown
                    selected={sortCommentsBy}
                    onChange={setSortCommentsBy}
                    options={[
                        { value: 'newest', label: 'Найновіші' },
                        { value: 'oldest', label: 'Найстаріші' },
                        { value: 'author', label: 'За автором' }
                    ]}
                />

                <div className="mt-4">
          <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Залиште свій коментар..."
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#2C2C3B] dark:text-white"
          />
                    <button
                        onClick={handleAddComment}
                        className="mt-2 bg-[#2563EB] text-white px-6 py-2 rounded-full hover:bg-[#1E40AF] transition"
                    >
                        Надіслати
                    </button>
                </div>

                {sortedComments.length > 0 ? (
                    <div className="mt-6 space-y-4">
                        {sortedComments.map(comment => (
                            <div key={comment.id} className="bg-white dark:bg-[#1C1C2E] border border-gray-200 dark:border-[#2C2C3B] p-4 rounded-xl">
                                <div className="flex justify-between mb-1">
                                    <span className="font-semibold text-[#202857] dark:text-white">{comment.author}</span>
                                    <span className="text-xs text-gray-500">{new Date(comment.date).toLocaleString()}</span>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{comment.text}</p>
                                <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                                    <button onClick={() => handleLike(comment.id)} className="hover:text-red-500 transition">
                                        <Heart size={16} className="inline-block mr-1" /> {comment.likes}
                                    </button>
                                    <button className="hover:text-blue-500 transition">
                                        <Pencil size={16} className="inline-block mr-1" /> Редагувати
                                    </button>
                                    <button className="hover:text-blue-500 transition">
                                        <MessageCircle size={16} className="inline-block mr-1" /> Відповісти
                                    </button>
                                    <button className="hover:text-red-600 transition">
                                        <Trash2 size={16} className="inline-block mr-1" /> Видалити
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 dark:text-gray-400 mt-4">Коментарі відсутні.</p>
                )}
            </div>
        </div>
    );
};

export default NewsDetailPage;