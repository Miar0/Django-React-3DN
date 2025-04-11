import React from 'react'
import logo from '../assets/images/logo-PetLink.png'

const Header = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full bg-header-bg shadow-md rounded-b-xl bg-[#EDF2F7] ">
            <div
                className="max-w-[1440px] mx-auto h-[88px] flex items-center justify-between px-6">

                <div className="flex items-center gap-10">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="PetLink Logo"
                            className="w-[162px] h-[61px] object-contain"
                        />
                    </a>

                    {/* Navigation */}
                    <nav
                        className="flex items-center bg-[#D2D2D2]/40 backdrop-blur-md rounded-2xl h-[50px] shadow-[3px_3px_9px_rgba(0,0,0,0.1)] px-12 gap-28">
                        <a href="#"
                           className="text-md font-sm text-nav-btn">Головна</a>
                        <a href="#"
                           className="text-md font-sm text-nav-btn">Новини</a>
                        <a href="#" className="text-md font-sm text-nav-btn">Про
                            нас</a>
                    </nav>
                </div>

                {/* Auth Buttons */}
                <div className="flex gap-3 ">
                    <button
                        className="cursor-pointer h-[34px] w-[87px] text-[18px] font-bold text-[#1235C7] rounded-lg login-btn border border-[#1235C7]
                        shadow-[2px_2px_7px_rgba(0,0,0,0.1),8px_9px_12px_rgba(0,0,0,0.09),19px_20px_16px_rgba(0,0,0,0.05),34px_35px_20px_rgba(0,0,0,0.01),53px_55px_21px_rgba(0,0,0,0)]">
                        Увійти
                    </button>
                    <button
                        className="cursor-pointer h-[34px] w-[125px] text-[18px] font-bold register-btn text-[#EDF2F7] rounded-lg
                         shadow-[1px_2px_6px_rgba(0,0,0,0.15),5px_9px_10px_rgba(0,0,0,0.13),12px_20px_14px_rgba(0,0,0,0.08),21px_36px_17px_rgba(0,0,0,0.02),32px_56px_18px_rgba(0,0,0,0)]"
                    >
                        Реєстрація
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
