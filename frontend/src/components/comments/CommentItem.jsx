import React, { useState } from 'react';

const CommentItem = ({ comment, onLike, onEdit, onDelete, onReply }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(comment.text);

    const handleEditSave = () => {
        if (!editText.trim()) return;
        onEdit(comment.id, editText);
        setIsEditing(false);
    };

    return (
        <div className="bg-white dark:bg-[#1C1C2E] border border-gray-200 dark:border-[#2C2C3B] p-4 rounded-xl">
            <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-[#202857] dark:text-white">{comment.author}</span>
                <span className="text-xs text-gray-500">{new Date(comment.date).toLocaleString()}</span>
            </div>

            {isEditing ? (
                <div className="space-y-2">
          <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-100 dark:bg-[#2C2C3B] dark:text-white"
          />
                    <div className="flex gap-2">
                        <button onClick={handleEditSave} className="text-blue-600">Зберегти</button>
                        <button onClick={() => setIsEditing(false)} className="text-gray-500">Скасувати</button>
                    </div>
                </div>
            ) : (
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{comment.text}</p>
            )}

            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                <button onClick={() => onLike(comment.id)}>❤️ {comment.likes || 0}</button>
                <button onClick={() => setIsEditing(true)}>✏️ Редагувати</button>
                <button onClick={() => onReply(comment.id)}>↩️ Відповісти</button>
                <button onClick={() => onDelete(comment.id)}>🗑️ Видалити</button>
            </div>

            {comment.replies?.length > 0 && (
                <div className="mt-4 space-y-2 pl-4 border-l border-gray-300 dark:border-gray-600">
                    {comment.replies.map(reply => (
                        <CommentItem
                            key={reply.id}
                            comment={reply}
                            onLike={onLike}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onReply={onReply}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentItem;
