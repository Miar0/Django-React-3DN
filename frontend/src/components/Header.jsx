import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-PetLink.png'
import logo_dark from '../assets/images/logo-dark.png'
import { useTheme } from '../hooks/UseTheme';
import ThemeToggle from './ThemeToggle';

const Header = ({ onLoginOpen, onRegisterOpen }) => {
    const { theme } = useTheme();

    return (

        <header className="sticky top-0 z-50 w-full bg-header-bg dark:bg-header-dark/72 shadow-md rounded-b-xl bg-[#EDF2F7]
         shadow-[7px_35px_79px_rgba(0,0,0,0.2),27px_142px_144px_rgba(0,0,0,0.17),60px_319px_195px_rgba(0,0,0,0.1),107px_567px_231px_rgba(0,0,0,0.03),167px_385px_250px_rgba(0,0,0,0.01)]
        ">
            <div className="max-w-[1440px] mx-auto h-[88px] flex items-center justify-between px-0">

                {/* Logo + Navigation */}
                <div className="flex items-center gap-2 ml-[24px] dark:gap-7 ml-8 dark:ml-0 dark:mt-0 mt-1">
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <img
                            src={logo}
                            alt="PetLink Logo Light"
                            className="w-[148px] h-[52px]  object-contain dark:hidden"
                        />
                    </Link>

                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <img
                            src={logo_dark}
                            alt="PetLink Logo Dark"
                            className="w-[142px] h-[41px] object-contain hidden dark:block"
                        />
                    </Link>

                    <nav className="flex items-center  px-12 gap-28 ml-10 dark:ml-8 dark:mt-1 mt-0
                    bg-[#D2D2D2]/40 dark:bg-[#D2D2D2]/20 backdrop-blur-md rounded-2xl h-[50px] shadow-[3px_3px_9px_rgba(0,0,0,0.1)]
                    dark:shadow-[7px_14px_35px_rgba(0,0,0,0.29),29px_57px_64px_rgba(0,0,0,0.26),66px_128px_86px_rgba(0,0,0,0.15),117px_228px_103px_rgba(0,0,0,0.04),182px_356px_112px_rgba(0,0,0,0.01)]
                    ">
                        <Link
                            to="/"
                            className="text-md font-sm text-nav-btn dark:text-[#F5F5F5] cursor-pointer "
                        >
                            Головна
                        </Link>
                        <Link
                            to="/news"
                            className="text-md font-sm text-nav-btn dark:text-[#F5F5F5] cursor-pointer"
                        >
                            Новини
                        </Link>
                        <Link
                            to="/about"
                            className="text-md font-sm text-nav-btn dark:text-[#F5F5F5] cursor-pointer"
                        >
                            Про нас
                        </Link>
                    </nav>
                </div>


                {/* Auth Buttons */}
                <div className="flex gap-2 mr-14 ">
                    {/* Toggle + Auth Buttons */}
                    <div className='flex space-x-2'>
                        <ThemeToggle />
                        <button onClick={onLoginOpen}></button>
                        <button onClick={onRegisterOpen}></button>
                    </div>

                    <button
                        onClick={onLoginOpen}
                        className="cursor-pointer h-[34px] w-[87px] text-[18px] font-bold text-[#1235C7] rounded-lg border border-[#1235C7]
                        shadow-[2px_2px_7px_rgba(0,0,0,0.1),8px_9px_12px_rgba(0,0,0,0.09),19px_20px_16px_rgba(0,0,0,0.05),34px_35px_20px_rgba(0,0,0,0.01),53px_55px_21px_rgba(0,0,0,0)]
                        dark:bg-gradient-to-r dark:from-[#EBE8E8] dark:to-[#CAD2DA]">
                        Увійти
                    </button>
                    <button
                        className="h-[34px] w-[125px] text-[18px] font-bold register-btn text-[#EDF2F7] rounded-lg
                         shadow-[1px_2px_6px_rgba(0,0,0,0.15),5px_9px_10px_rgba(0,0,0,0.13),12px_20px_14px_rgba(0,0,0,0.08),21px_36px_17px_rgba(0,0,0,0.02),32px_56px_18px_rgba(0,0,0,0)]
                         cursor-pointer"
                        onClick={onRegisterOpen}
                    >
                        Реєстрація
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header
