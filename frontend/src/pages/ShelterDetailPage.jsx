import React from 'react';
import { useParams, Link } from 'react-router-dom';
import shelters from '../data/shelters';
import pets from '../data/pets';
import PetCard from '../components/carousel/PetCard';
import { getPetsFromStorage } from '../utils/storage';
import DonateModal from '../components/DonateModal'; // 👈 Додай імпорт


const ShelterDetailPage = () => {
    const { id } = useParams();
    const shelter = shelters.find(s => s.id === Number(id));

    const localPets = getPetsFromStorage() || [];
    const allPets = [...localPets, ...pets];

    const shelterPets = allPets.filter(p => p.shelterId === shelter?.id);

    if (!shelter) {
        return (
            <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond p-6 text-center">
                <h1 className="text-2xl text-red-600 dark:text-red-400">Притулок не знайдено</h1>
                <Link to="/shelters" className="text-blue-500 hover:underline block mt-4">
                    Повернутися до Притулків
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-dark-fond px-4 py-8 md:px-12">
            <Link
                to="/shelters"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium
                hover:text-blue-800 dark:hover:text-blue-300 transition-all ease-in-out cursor-pointer mb-4"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Повернутися до Притулків
            </Link>

            <div className="bg-white dark:bg-[#1C1C2E] rounded-2xl shadow-md p-6 mb-10 grid md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-[24px] font-bold text-[#202857] dark:text-white mb-4">{shelter.name}</h2>
                    <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-2">Інформація про притулок</h3>
                    <p className="text-[#202857] dark:text-white"><strong>Тип:</strong> {shelter.type}</p>
                    <p className="text-[#202857] dark:text-white"><strong>Розташування:</strong> {shelter.location}</p>
                    {shelter.contact && <p className="text-[#202857] dark:text-white"><strong>Контакти:</strong> {shelter.contact}</p>}
                </div>

                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="font-semibold text-lg text-gray-700 dark:text-gray-300 mb-2">Про нас</h3>
                        <p className="text-gray-600 dark:text-gray-400">{shelter.description}</p>
                    </div>


                    <div className="mt-4 flex items-center gap-4 w-full">
                        <a
                            href={shelter.website ? `https://${shelter.website}` : "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#2563EB] text-white py-2 px-4 rounded-full hover:bg-[#1E40AF] transition"
                        >
                            Зв'язатися з притулком
                        </a>

                        <Link
                            to="/create-announcement"
                            className="bg-white border border-[#2563EB] text-[#2563EB] py-2 px-4 rounded-full hover:bg-[#F0F4FF] transition"
                        >
                            Передати тваринку
                        </Link>

                        <DonateModal /> {/* 👈 Вставка модального компонента */}
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-[20px] md:text-[24px] font-semibold text-[#202857] dark:text-white mb-4">Доступні тварини</h2>
                {shelterPets.length === 0 ? (
                    <div className="bg-white dark:bg-[#1C1C2E] rounded-2xl p-6 shadow-md">
                        <h3 className="text-lg font-semibold mb-2 text-[#202857] dark:text-white">Жодна тварина недоступна.</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            У цьому притулку немає жодної тварини, зазначеної для усиновлення.
                        </p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Будь ласка, перевірте пізніше.
                        </p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {shelterPets.map((pet) => (
                            <PetCard key={pet.id} pet={pet} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShelterDetailPage;
