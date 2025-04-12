import React from 'react'
import { HiOutlinePlus } from 'react-icons/hi'

const ButtonCreate = ({ onClick }) => (
    <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 border border-[#07006D] rounded-full text-[#07006D] font-medium hover:bg-[#f4f4ff] transition whitespace-nowrap"
    >
        <HiOutlinePlus />
        Створити оголошення
    </button>
)

export default ButtonCreate
