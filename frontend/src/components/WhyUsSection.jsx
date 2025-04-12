import React from 'react';
import usPets from "../assets/images/us-pets.png";
import usGreenEllipse from '../assets/icons/us-green-ellipse.svg';
import usVector from '../assets/icons/us-vector.svg';

const WhyUsSection = () => {
    return (
        <section
            className="relative bg-[#EDF2F7] dark:bg-[#080B2A]  overflow-hidden pt-49 pb-21 ">
            {/* Green blurred background */}
            <div
                className="absolute   ">
                <div
                    className="absolute left-[247px] top-[145px] w-[300px] h-[300px] opacity-100 blur-[110px] rounded-full z-0 "
                    style={{
                        background: 'radial-gradient(circle, rgba(90, 196, 97, 1) 30%,' +
                            ' rgba(90, 196, 97, 0.4) 30%)'
                    }}
                />


                <div
                    className="absolute inset-0 z-1 left-[155px] -top-[10px] w-[539px] h-[514px] dark:opacity-20 ">
                    <img src={usVector} alt="vector" className="w-full h-full"/>

                </div>
            </div>


            {/* Optional second blurred background */}
            {/* Пляма на фоні */}
            <div className="absolute left-[177px] top-[120px] w-[371px] h-[346px]  opacity-70 rounded-full bg-[#5AC461] blur-[350px] z-0 " />

            {/* Контент: заголовок + зображення */}
            <div
                className="relative z-10 max-w-[1440px] mx-auto px-6 flex flex-col items-center ">
                <div className="flex flex-col items-end  ">
                        {/* Заголовок – завжди зверху */}
                        <h2 className="text-[32px] lg:text-[36px] font-semibold text-[#202857] dark:text-[#C5C5C5] -mt-10 pr-76 pb-30">
                            Чому саме ми?
                        </h2>

                        {/* Зображення тварин */}
                        <img
                            src={usPets}
                            alt="Pets group"
                            className="w-[600px] h-[416px] ml-250 object-contain drop-shadow-[0_10px_11px_rgba(0,0,0,0.1)] "
                        />
                </div>
            </div>


        </section>
);
};

export default WhyUsSection;
