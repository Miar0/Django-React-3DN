import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const ButtonCreate = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/announcements/create')}
            className="flex items-center cursor-pointer gap-2 px-4 py-2 border dark:text-blue-100 dark:border-white/20
             dark:hover:bg-gray-700 border-[#07006D] text-[#07006D] rounded-full hover:bg-gray-50 transition whitespace-nowrap"
        >
            <HiOutlinePlus />
            Створити оголошення
        </button>
    )
}

export default ButtonCreate
