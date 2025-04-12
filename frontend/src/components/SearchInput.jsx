import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchInput = ({ value, onChange, placeholder = 'Пошук...' }) => {
    return (
        <div className="flex items-center w-full max-w-md rounded-full shadow-sm bg-gray-50 px-4 py-2 border-[#07006D] border-1">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 "
            />
            <FiSearch className="text-[#07006D]" />
        </div>
    )
}

export default SearchInput
