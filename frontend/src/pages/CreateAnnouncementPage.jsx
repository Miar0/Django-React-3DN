import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAnnouncementPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        age: '',
        gender: '',
        breed: '',
        description: '',
        healthStatus: '',
        contact: '',
        image: null,
        imagePreview: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file,
                imagePreview: URL.createObjectURL(file),
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, type, age, gender, healthStatus, contact, image } = formData;
        if (!name || !type || !age || !gender || !healthStatus || !contact || !image) {
            alert("Будь ласка, заповніть всі обов’язкові поля!");
            return;
        }

        console.log('📝 Дані оголошення:', formData);
        navigate('/announcements');
    };

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond py-10 px-4 md:px-12">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1B1B1B] dark:text-white mb-8 text-center">
                Створити нове оголошення
            </h1>

            <form onSubmit={handleSubmit}
                  className="max-w-3xl mx-auto bg-white dark:bg-[#1C1C2E] p-6 rounded-3xl shadow-md space-y-6">
                {/* Фото */}
                <div>
                    <label className="block mb-1 font-medium dark:text-white">Фото
                        тваринки *</label>

                    <div className="w-full">
                        <label
                            htmlFor="imageUpload"
                            className="cursor-pointer block text-center text-sm text-white bg-gradient-to-r from-[#202857] to-[#4658BD] px-4 py-2 rounded-md shadow hover:opacity-90 transition"
                        >
                            Завантажити фото
                        </label>
                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </div>

                    {formData.imagePreview && (
                        <img
                            src={formData.imagePreview}
                            alt="preview"
                            className="mt-4 rounded-xl w-full max-h-[300px] object-cover"
                        />
                    )}
                </div>


                {/* Імʼя */}
                <div>
                    <label className="block mb-1 font-medium dark:text-white">Ім’я
                        *</label>
                    <input type="text" name="name" value={formData.name}
                           onChange={handleChange}
                           className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"/>
                </div>

                {/* Тип / Стать */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Тип
                            *</label>
                        <input type="text" name="type" value={formData.type}
                               onChange={handleChange}
                               className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Стать
                            *</label>
                        <select name="gender" value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
                            <option value="">Оберіть</option>
                            <option value="Самець">Самець</option>
                            <option value="Самка">Самка</option>
                        </select>
                    </div>
                </div>

                {/* Вік / Порода */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Вік
                            *</label>
                        <input type="text" name="age" value={formData.age}
                               onChange={handleChange}
                               className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Порода
                            (необов’язково)</label>
                        <input type="text" name="breed" value={formData.breed}
                               onChange={handleChange}
                               className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"/>
                    </div>
                </div>

                {/* Стан здоровʼя / Контакт */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Стан
                            здоров’я *</label>
                        <select name="healthStatus" value={formData.healthStatus}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
                            <option value="">Оберіть</option>
                            <option value="Здоровий">Здоровий</option>
                            <option value="Потребує лікування">Потребує лікування</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Контакт
                            притулку *</label>
                        <input type="text" name="contact" value={formData.contact}
                               onChange={handleChange}
                               className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"/>
                    </div>
                </div>

                {/* Опис */}
                <div>
                    <label className="block mb-1 font-medium dark:text-white">Опис
                        тваринки</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Розкажіть про тваринку..."
                        className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    ></textarea>
                </div>

                {/* Submit */}
                <div className="text-center">
                    <button type="submit"
                            className="bg-[#2563EB] text-white py-2 px-6 rounded-full hover:bg-[#1E40AF] transition">
                        Створити оголошення
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAnnouncementPage;
