import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BurgerMenu = ({ isOpen, onClose, onLoginOpen, onRegisterOpen }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [isOpen]);

    return (
        <div
            className={`
                sm:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out
                ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
            `}
        >
            {/* BACKDROP */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"
            />

            {/* МЕНЮ */}
            <div className="relative z-20 flex flex-col items-center pt-[100px] px-8 h-full w-full
            text-center backdrop-blur-xl bg-white/60 dark:bg-dark-fond/80 overflow-y-auto">
                {/* Хрестик */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-4xl z-30
                    text-white dark:text-[#8BA8FF] transition-colors duration-200"
                >
                    &times;
                </button>

                {/* Навігація — зверху і по центру */}
                <nav className="flex flex-col gap-6 mt-20 text-2xl font-semibold text-[#202857] dark:text-white">
                    <Link to="/" onClick={onClose} className="hover:text-[#3DA435] transition">Головна</Link>
                    <Link to="/shelters" onClick={onClose} className="hover:text-[#3DA435] transition">Притулки</Link>
                    <Link to="/news" onClick={onClose} className="hover:text-[#3DA435] transition">Новини</Link>
                    <button
                        onClick={() => {
                            onLoginOpen();
                            onClose();
                        }}
                        className="hover:text-[#3DA435] transition"
                    >
                        Увійти
                    </button>
                    <button
                        onClick={() => {
                            onRegisterOpen();
                            onClose();
                        }}
                        className="hover:text-[#3DA435] transition"
                    >
                        Реєстрація
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;
