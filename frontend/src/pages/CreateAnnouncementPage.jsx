import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import shelters from '../data/shelters';
import { savePetToStorage } from '../utils/storage';

const allTypeOptions = [
    'Собака', 'Кіт', 'Хом’як', 'Кролик', 'Папуга', 'Рибка', 'Черепаха',
    'Морська свинка', 'Поні', 'Їжак', 'Єнот', 'Фретка', 'Козлик', 'Гусак',
    'Сова', 'Качка', 'Орел', 'Канарейка', 'Курка', 'Індик'
].map((item) => ({ value: item, label: item }));

const topFiveTypes = allTypeOptions.slice(0, 5);

const CreateAnnouncementPage = () => {
    const navigate = useNavigate();
    const [selectedImages, setSelectedImages] = useState([]); // [{file, url}]
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        age: '',
        gender: '',
        breed: '',
        description: '',
        healthStatus: '',
        contact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleTypeChange = (selected) => {
        setFormData((prev) => ({ ...prev, type: selected ? selected.value : '' }));
    };

    const handleImageAdd = (e) => {
        const files = Array.from(e.target.files);
        const total = selectedImages.length + files.length;

        if (total > 10) {
            alert('Можна завантажити максимум 10 фото!');
            return;
        }

        const newImages = files.map(file => ({
            file,
            url: URL.createObjectURL(file)
        }));

        setSelectedImages((prev) => [...prev, ...newImages]);
    };

    const removeImage = (index) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, type, age, gender, healthStatus, contact } = formData;
        if (!name || !type || !age || !gender || !healthStatus || !contact || selectedImages.length === 0) {
            alert('Будь ласка, заповніть всі обов’язкові поля!');
            return;
        }

        const newPet = {
            id: Date.now(),
            ...formData,
            images: selectedImages.map(img => img.url),
        };

        savePetToStorage(newPet);
        navigate('/announcements');
    };

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond py-10 px-4 md:px-12">
            <div className="max-w-3xl mx-auto mb-4">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#2563EB] dark:text-blue-400 font-medium
                    hover:text-[#1D4ED8] dark:hover:text-blue-500 transition-all ease-in-out cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    Повернутися назад
                </button>
            </div>

            <h1 className="text-[28px] md:text-[36px] font-bold text-[#1B1B1B] dark:text-white mb-8 text-center">
                Створити нове оголошення
            </h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto bg-white dark:bg-[#1C1C2E] p-6 rounded-3xl shadow-md space-y-6"
            >
                <div>
                    <label className="block mb-1 font-medium dark:text-white">Фото тваринки *</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageAdd}
                        className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white cursor-pointer hover:ring-1 active:ring-1"
                        required
                    />
                    {selectedImages.length > 0 && (
                        <div
                            className={`grid gap-4 mt-4 ${
                                selectedImages.length <= 2
                                    ? 'grid-cols-1 md:grid-cols-2'
                                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                            }`}
                        >
                            {selectedImages.map((img, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={img.url}
                                        alt={`preview-${index}`}
                                        className="rounded-xl w-full object-cover max-h-[160px]"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium dark:text-white">Ім’я *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none focus:ring-1"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Тип *</label>
                        <Select
                            options={allTypeOptions}
                            onChange={handleTypeChange}
                            placeholder="Оберіть або введіть"
                            isClearable
                            isSearchable
                            required
                            className="react-select-container"
                            classNamePrefix="react-select"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    backgroundColor: '#f3f4f6',
                                    borderRadius: '0.375rem',
                                }),
                            }}
                            defaultOptions={topFiveTypes}
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Стать *</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white cursor-pointer outline-none focus:ring-1"
                        >
                            <option value="">Оберіть</option>
                            <option value="Самець">Самець</option>
                            <option value="Самка">Самка</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Вік *</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none focus:ring-1"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Порода (необов’язково)</label>
                        <input
                            type="text"
                            name="breed"
                            value={formData.breed}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none focus:ring-1"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Стан здоров’я *</label>
                        <select
                            name="healthStatus"
                            value={formData.healthStatus}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white cursor-pointer outline-none focus:ring-1"
                        >
                            <option value="">Оберіть</option>
                            <option value="Здоровий">Здоровий</option>
                            <option value="Потребує лікування">Потребує лікування</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium dark:text-white">Контакт притулку *</label>
                        <select
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white cursor-pointer outline-none focus:ring-1"
                        >
                            <option value="">Оберіть</option>
                            {shelters.map((shelter) => (
                                <option key={shelter.id} value={shelter.contact}>
                                    {shelter.name} ({shelter.contact})
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium dark:text-white">Опис тваринки</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Розкажіть про тваринку..."
                        className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white resize-none overflow-y-auto max-h-40 outline-none focus:ring-1"
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-[#2563EB] text-white py-2 px-6 rounded-full hover:bg-[#1E40AF] transition cursor-pointer"
                    >
                        Створити оголошення
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateAnnouncementPage;