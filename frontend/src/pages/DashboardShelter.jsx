// pages/DashboardShelter.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../components/comments/CommentList';
import SortDropdown from '../components/SortDropdown';
// import dogs from  '../assets/images/dogs.png';

const mockPets = [
    {
        id: 102,
        name: 'Мурка',
        type: 'Кіт',
        age: '3 роки',
        gender: 'Самка',
        healthStatus: 'Потребує лікування',
        images: [
            'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
        ],
        replies: [],
    },
];

const DashboardShelter = () => {
    const [pets, setPets] = useState([]);
    const [sortOption, setSortOption] = useState('name');

    useEffect(() => {
        const stored = localStorage.getItem('pets');
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.length === 0) {
                setPets(mockPets);
                localStorage.setItem('pets', JSON.stringify(mockPets));
            } else {
                setPets(parsed);
            }
        } else {
            setPets(mockPets);
            localStorage.setItem('pets', JSON.stringify(mockPets));
        }
    }, []);

    const handleDelete = (id) => {
        const confirmed = window.confirm('Ви впевнені, що хочете видалити оголошення?');
        if (!confirmed) return;
        const updated = pets.filter((p) => p.id !== id);
        setPets(updated);
        localStorage.setItem('pets', JSON.stringify(updated));
    };

    const sortedPets = [...pets].sort((a, b) => {
        if (sortOption === 'name') return a.name.localeCompare(b.name);
        if (sortOption === 'type') return a.type.localeCompare(b.type);
        return 0;
    });

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond px-4 py-8 md:px-12 text-[#1B1B1B] dark:text-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-2xl md:text-3xl font-bold">Кабінет притулку</h1>
                <SortDropdown
                    position="left"
                    selected={sortOption}
                    onChange={setSortOption}
                    options={[
                        { value: 'name', label: 'За назвою' },
                        { value: 'type', label: 'За типом' },
                    ]}
                />
            </div>

            {pets.length === 0 ? (
                <p className="text-center text-gray-600 dark:text-gray-400">У вас ще немає активних оголошень.</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedPets.map((pet) => (
                        <div key={pet.id} className="bg-white dark:bg-[#1C1C2E] p-4 rounded-2xl shadow-md">
                            {pet.images?.length > 0 && (
                                <div className="overflow-hidden rounded-xl mb-3">
                                    <img
                                        src={pet.images[0]}
                                        alt={pet.name}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            )}
                            <h3 className="text-xl font-semibold text-[#202857] dark:text-white mb-1">{pet.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {pet.type}, {pet.age}, {pet.gender}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Стан: {pet.healthStatus}</p>

                            <div className="flex justify-between items-center mt-4 gap-3">
                                <Link
                                    to={`/edit/${pet.id}`}
                                    className="text-sm bg-yellow-400 text-white px-4 py-1 rounded-full hover:bg-yellow-600 transition"
                                >
                                    Редагувати
                                </Link>
                                <button
                                    onClick={() => handleDelete(pet.id)}
                                    className="text-sm bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-800 transition cursor-pointer"
                                >
                                    Видалити
                                </button>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold mb-2 text-sm">Коментарі до тваринки</h4>
                                <CommentList storageKey={`comments_animal_${pet.id}`} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DashboardShelter;
