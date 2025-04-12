import React from 'react';
import catImage from '../../assets/images/cat.png';

const PetCard = ({ pet }) => {
    return (
        <div className="relative w-75 h-100 px-4 pt-4
            rounded-[18px] shadow-md flex flex-col items-center justify-start
            transition-transform duration-300 hover:scale-105 z-10 hover:z-30
            dark:bg-[linear-gradient(to_bottom,_#FFFFFF,_rgba(156,185,248,0.12))]
            "
             style={{
                    background: 'linear-gradient(to bottom, #3A43B1 1%, #FFFFFF 99%',
                //      boxShadow: `
                //     6px 8px 22px rgba(0, 0, 0, 0.10),
                //     23px 33px 40px rgba(0, 0, 0, 0.09),
                //     51px 75px 54px rgba(0, 0, 0, 0.05),
                //     91px 133px 64px rgba(0, 0, 0, 0.01),
                //     142px 208px 71px rgba(0, 0, 0, 0.01)
                // `
                 }}
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
