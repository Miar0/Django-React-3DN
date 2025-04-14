import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
    const previewImage = Array.isArray(pet.images) && pet.images.length > 0
        ? pet.images[0]
        : 'https://via.placeholder.com/300';

    return (
        <Link to={`/animals/${pet.id}`}>
            <div className="w-full max-w-[300px] h-auto mx-auto px-4 pt-4
        rounded-[18px] shadow-md flex flex-col items-center justify-start
        transition-transform duration-300 hover:scale-105 z-10 hover:z-30
        bg-[linear-gradient(to_bottom,_rgba(7,0,109,0.8)_1%,_#FFFFFF_99%)]
        dark:bg-[linear-gradient(to_bottom,_#1B1E4B_0%,_#A6B1C6_100%)]"
            >
                <img
                    src={previewImage}
                    alt={pet.name}
                    className="w-68 h-56 object-cover rounded-[18px]
          border-1 border-[rgba(0,0,0,0.19)] dark:border-[rgba(0,0,0,0.19)]"
                />
                <div className="p-4 text-center flex flex-col items-center justify-center flex-1">
                    <h3 className="text-lg font-semibold text-[#202857]">{pet.name}</h3>
                    <p className="text-sm text-gray-600">{pet.type}</p>
                    {pet.age && <p className="text-sm text-gray-600">{pet.age}</p>}
                    {pet.gender && <p className="text-sm text-gray-600">{pet.gender}</p>}
                    {pet.healthStatus && (
                        <p className="text-xs mt-1 text-green-600 dark:text-green-300">
                            {pet.healthStatus}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PetCard;
