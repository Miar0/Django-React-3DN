import React from 'react'
import pets from '../assets/images/pets.png'
import greenEllipse from '../assets/icons/green-ellipse.svg'
import blueEllipse from '../assets/icons/blue-ellipse.svg'
import rightBlueEllipse from '../assets/icons/right-blue-ellipse.svg'


const HomePage = () => {
    return (
        <section
            className="min-h-[calc(100vh-88px)] bg-[#EDF2F7] dark:bg-dark-fond  flex items-center justify-center relative overflow-hidden">
            <img
                src={greenEllipse}
                alt="decorative path"
                width={900}
                height={600}
                className="absolute -bottom-67 -right-22 z-0"
            />
            <img
                src={blueEllipse}
                alt="decorative path"
                width={900}
                height={600}
                className="absolute -bottom-50 -left-45 z-0"
            />
            <img
                src={rightBlueEllipse}
                alt="decorative path"
                width={900}
                height={600}
                className="absolute -bottom-50 left-180 z-0"
            />
            <div
                className="max-w-[1440px] w-full  flex flex-col lg:flex-row items-center justify-between ">
                {/* Left Content Text+Buttons*/}
                <div
                    className="flex-1 flex flex-col pl-26 justify-center items-start text-left pb-18 z-10">
                    {/*Head Text*/}
                    <div className='flex flex-col mb-38 '>
                        <h1 className="text-[60px] whitespace-nowrap font-extrabold leading-tight tracking-[0.8px] light:primary-text
                        dark:bg-[linear-gradient(135deg,_#8BBD8E_0%,_#FFFFFF_90%,_#999999_100%)] bg-clip-text text-transparent
                        mb-6 ">
                            Допоможи лапкам знайти дім
                        </h1>
                        <p className=" max-w-2xl text-[20px] text-black dark:text-[#FFFFFF] font-light leading-tight tracking-[2px] max-w-2xl">
                            Стань тим, хто подарує безпритульній тваринці не лише дах над
                            головою, а й тепло, турботу та
                            <span className="text-[#3DA435] dark:text-[#8BFA92] "> нове життя</span>.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-9 mt-8">
                        <button
                            className="cursor-pointer w-[250px] h-[50px] rounded-full shadow-[0_4px_20px_rgba(104,109,224,0.5)] primary-btn dark:text-[#FFFFFF]"
                        >
                            Обрати улюбленця
                        </button>

                        <button
                            className="cursor-pointer w-[250px] h-[50px] rounded-full bg-white border border-[#202857] shadow-[0_4px_20px_rgba(104,109,224,0.5)]"
                        >
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={pets}
                        alt="Pets illustration"
                        className="max-w-[700px] w-full h-auto object-contain z-10 absolute top-50 right-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default HomePage
