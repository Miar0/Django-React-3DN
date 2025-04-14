import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

const CreateReviewsShelter = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        rating: 0,
        comment: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleStarClick = (rating) => {
        setFormData((prevData) => ({
            ...prevData,
            rating: rating,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Дані відгуку надіслані:', formData);
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond py-10 px-4 md:px-12">
            <div className="max-w-3xl mx-auto mb-4">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#2563EB] dark:text-blue-400 font-medium hover:text-[#1D4ED8] dark:hover:text-blue-500 transition-all ease-in-out cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Повернутися назад
                </button>
            </div>


            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1B1B1B] dark:text-white mb-8 text-center">
                Написати відгук про притулок
            </h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white dark:bg-[#1C1C2E] p-6 rounded-3xl shadow-md space-y-6"
            >
                <div>
                    <label htmlFor="rating" className="block mb-1 font-medium dark:text-white">
                        Оцінка (1-5) *
                    </label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                type="button"
                                key={star}
                                onClick={() => handleStarClick(star)}
                                className="focus:outline-none cursor-pointer"
                            >
                                {formData.rating >= star ? (
                                    <FaStar className="text-yellow-500" size={30} />
                                ) : (
                                    <FaRegStar className="text-gray-300" size={30} />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="comment" className="block mb-1 font-medium dark:text-white">
                        Коментар *
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white resize-none overflow-y-auto max-h-40 outline-none focus:ring-1"
                        placeholder="Ваш коментар"
                        rows="4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Надіслати відгук
                </button>
            </form>
        </div>
    );
};

export default CreateReviewsShelter;
