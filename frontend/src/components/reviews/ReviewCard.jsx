import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-[18rem] lg:max-w-[20rem] min-h-[16rem] mt-5
            bg-[rgba(249,249,249,0.99)] dark:bg-[#1F1F2B]/75 rounded-3xl
            pt-12 pb-6 px-6 flex flex-col items-center justify-start shadow-md relative mx-auto">

            <img
                src={review.avatar}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-6 -mt-20 z-10 border-4 border-white dark:border-[#1F1F2B]"
            />

            <h4 className="text-base sm:text-lg font-medium text-[#202857] dark:text-white mb-1 text-center">
                {review.name}
            </h4>

            <div className="flex justify-center space-x-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}
                          className={`text-base sm:text-xl ${i < review.rating ? 'text-[#F9A825]' : 'text-gray-300'}`}>
                        ★
                    </span>
                ))}
            </div>

            {review.comment && (
                <p className="text-sm text-center text-gray-700 dark:text-gray-300 mt-2 line-clamp-4">
                    {review.comment}
                </p>
            )}
        </div>
    );
};

export default ReviewCard;
