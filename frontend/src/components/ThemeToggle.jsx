import { useTheme } from '../hooks/UseTheme.jsx';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="relative w-[43px] h-[16px] cursor-pointer select-none">
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                className="sr-only"
            />
            <div className="bg-[#8796A5] w-full h-full rounded-full transition relative mt-[9px]">
                <div
                    className="absolute top-[-7px] w-[32px] h-[30px] translate-x-[0.1px] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-md text-white"
                    style={{
                        left: theme === 'dark' ? 'calc(100% - 32px)' : '0',
                        backgroundColor: '#003892',
                    }}
                >
                    {theme === 'dark' ? <FaMoon size={16} /> : <FaSun size={16} className="text-yellow-200/90" />}
                </div>
            </div>
        </label>
    );
}
