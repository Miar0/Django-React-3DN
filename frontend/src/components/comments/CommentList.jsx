import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import SortDropdown from '../SortDropdown';

const CommentList = ({ storageKey = 'comments_default' }) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [likedComments, setLikedComments] = useState({});
    const [replyingTo, setReplyingTo] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem(storageKey);
        if (stored) setComments(JSON.parse(stored));
    }, [storageKey]);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(comments));
    }, [comments, storageKey]);

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
        const alreadyLiked = likedComments[id];
        setComments(prev => prev.map(c => c.id === id ? { ...c, likes: alreadyLiked ? c.likes - 1 : c.likes + 1 } : c));
        setLikedComments(prev => ({ ...prev, [id]: !alreadyLiked }));
    };

    const handleEdit = (id, text) => {
        setComments(prev => prev.map(c => c.id === id ? { ...c, text } : c));
    };

    const handleDelete = (id) => {
        setComments(prev => prev.filter(c => c.id !== id));
    };

    const handleReply = (parentId, replyText) => {
        const reply = {
            id: Date.now(),
            author: 'Анонім',
            text: replyText,
            date: new Date().toISOString(),
            likes: 0
        };
        setComments(prev => prev.map(c =>
            c.id === parentId ? { ...c, replies: [...(c.replies || []), reply] } : c
        ));
    };

    const sorted = [...comments].sort((a, b) => {
        if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortBy === 'author') return a.author.localeCompare(b.author);
        return 0;
    });

    return (
        <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Коментарі</h2>

            {/*<SortDropdown*/}
            {/*    selected={sortBy}*/}
            {/*    onChange={setSortBy}*/}
            {/*    options={[*/}
            {/*        { value: 'newest', label: 'Найновіші' },*/}
            {/*        { value: 'oldest', label: 'Найстаріші' },*/}
            {/*        { value: 'author', label: 'За автором' }*/}
            {/*    ]}*/}
            {/*/>*/}

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

            {sorted.length > 0 && (
                <div className="mt-6 space-y-4">
                    {sorted.map(comment => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            onLike={handleLike}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            onReply={handleReply}
                            liked={likedComments[comment.id]}
                            replyingTo={replyingTo}
                            setReplyingTo={setReplyingTo}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default CommentList;
