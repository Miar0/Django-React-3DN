import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="w-72 h-60 mt-5 bg-[rgba(249,249,249,0.99)] dark:bg-[#1F1F2B]/75 rounded-3xl
        pt-11 pb-6 px-6  flex flex-col items-center justify-center shadow-md relative ">
            <img
                src={review.avatar}
                alt={review.name}
                className="w-30 h-30 rounded-full object-cover mb-8 -mt-29 z-10"
            />

            <h4 className="text-lg font-medium text-[#202857] dark:text-white mb-2">
                {review.name}
            </h4>

            <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}
                          className={`text-xl ${i < review.rating ? 'text-[#F9A825]' : 'text-gray-300'}`}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;
