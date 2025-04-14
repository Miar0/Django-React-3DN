import React, { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'

const defaultOptions = [
    { label: 'За назвою', value: 'name' },
    { label: 'Найновіші', value: 'newest' },
    { label: 'За типом', value: 'type' },
]

const SortDropdown = ({ options = defaultOptions, onChange, selected }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <button
                className="flex cursor-pointer items-center dark:text-blue-100 dark:border-white/20 dark:hover:bg-gray-700 gap-2 px-4 py-2 border border-[#07006D] text-[#07006D] rounded-full hover:bg-gray-50 transition"
                onClick={() => setIsOpen(!isOpen)}
            >
                <BiSortAlt2 />
                Сортувати
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 bg-white dark:bg-[#2C2C3B] border border-gray-200
                     dark:border-gray-600 shadow-md rounded-md w-48 z-50">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-300/20 text-sm ${
                                selected === option.value ? 'font-semibold ' +
                                    'text-green-400' : 'dark:text-white'
                            }`}
                            onClick={() => {
                                onChange(option.value)
                                setIsOpen(false)
                            }}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SortDropdown
