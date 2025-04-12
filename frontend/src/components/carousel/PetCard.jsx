import React from 'react';
import catImage from '../../assets/images/cat.png';

const PetCard = ({ pet }) => {
    return (
        <div className="relative w-75 h-100 px-4 pt-4
            rounded-[18px] shadow-md flex flex-col items-center justify-start
            transition-transform duration-300 hover:scale-105 z-10 hover:z-30
            bg-[linear-gradient(to_bottom,_rgba(7,0,109,0.8)_1%,_#FFFFFF_99%)]
            dark:bg-[linear-gradient(to_bottom,_#1B1E4B_0%,_#A6B1C6_100%)]
            "
        >

            <img
                src={pet?.image || catImage}
                alt={pet?.name || 'Котик'}
                className="w-68 h-56 object-cover rounded-[18px]
                border-1 border-[rgba(0,0,0,0.19)]
                 dark:border-[rgba(0,0,0,0.19)]"
            />
            <div
                className="p-4 text-center flex flex-col items-center justify-center flex-1 ">
                <h3 className="text-lg font-semibold text-[#202857]">{pet.name}</h3>
                {pet.type && (
                    <p className="text-sm text-gray-600 mt-1">{pet.type}</p>
                )}
            </div>
        </div>
    );
};

export default PetCard;
