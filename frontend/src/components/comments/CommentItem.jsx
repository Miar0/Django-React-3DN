// components/comments/CommentItem.jsx
import React, { useState } from 'react';
import { Heart, MessageCircle, Pencil, Trash2, Check, X } from 'lucide-react';

const CommentItem = ({ comment, onLike, onEdit, onDelete, onReply, liked, replyingTo, setReplyingTo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);
    const [replyText, setReplyText] = useState('');

    const handleEditSave = () => {
        if (!editText.trim()) return;
        onEdit(comment.id, editText);
        setIsEditing(false);
    };

    const handleReplySubmit = () => {
        if (!replyText.trim()) return;
        onReply(comment.id, replyText);
        setReplyText('');
        setReplyingTo(null);
    };

    return (
        <div className="bg-white dark:bg-[#1C1C2E] border border-gray-200 dark:border-[#2C2C3B] p-4 rounded-xl">
            <div className="flex justify-between mb-1">
                <span className="font-semibold text-[#202857] dark:text-white">{comment.author}</span>
                <span className="text-xs text-gray-500">{new Date(comment.date).toLocaleString()}</span>
            </div>

            {isEditing ? (
                <>
          <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full p-2 mb-2 rounded-md bg-gray-100 dark:bg-[#2C2C3B] dark:text-white"
          />
                    <div className="flex gap-2 mb-2">
                        <button onClick={handleEditSave} className="cursor-pointer hover:text-blue-500"><Check size={16} /></button>
                        <button onClick={() =>{setIsEditing(false)
                            setEditText(comment.text)}} className="cursor-pointer hover:text-red-500"><X size={16} /></button>
                    </div>
                </>
            ) : (
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{comment.text}</p>
            )}

            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                <button onClick={() => onLike(comment.id)} className="hover:text-red-500 transition cursor-pointer">
                    <Heart size={16} className="inline-block mr-1" /> {comment.likes}
                </button>
                <button onClick={() => setIsEditing(true)} className="hover:text-blue-500 transition cursor-pointer">
                    <Pencil size={16} className="inline-block mr-1" /> Редагувати
                </button>
                <button onClick={() => setReplyingTo(comment.id)} className="hover:text-blue-500 transition cursor-pointer">
                    <MessageCircle size={16} className="inline-block mr-1" /> Відповісти
                </button>
                <button onClick={() => onDelete(comment.id)} className="hover:text-red-600 transition cursor-pointer">
                    <Trash2 size={16} className="inline-block mr-1" /> Видалити
                </button>
            </div>

            {replyingTo === comment.id && (
                <div className="mt-4">
          <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Ваша відповідь..."
              className="w-full p-2 rounded-md bg-gray-100 dark:bg-[#2C2C3B] dark:text-white"
          />
                    <button
                        onClick={handleReplySubmit}
                        className="mt-2 text-sm bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 cursor-pointer"
                    >
                        Надіслати відповідь
                    </button>
                </div>
            )}

            {comment.replies?.length > 0 && (
                <div className="mt-4 ml-4 space-y-2">
                    {comment.replies.map(reply => (
                        <div key={reply.id} className="bg-gray-50 dark:bg-[#2C2C3B] p-3 rounded-md border border-gray-200 dark:border-gray-600">
                            <div className="flex justify-between mb-1">
                                <span className="font-semibold">{reply.author}</span>
                                <span className="text-xs text-gray-500">{new Date(reply.date).toLocaleString()}</span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{reply.text}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentItem;