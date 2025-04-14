import React from 'react'
import ReactPaginate from 'react-paginate'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = ({ pageCount, onPageChange }) => {
    return (
        <div className="flex justify-center items-center mt-10">
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={onPageChange}
                previousLabel={
                    <div className="w-full h-full  flex justify-center items-center dark:text-white">
                        <FaChevronLeft size={14} />
                    </div>
                }
                nextLabel={
                    <div className="w-full h-full  flex justify-center items-center dark:text-white">
                        <FaChevronRight size={14} />
                    </div>
                }
                breakLabel={
                    <div className="px-3 py-1  text-[#0700FF] dark:text-white">...</div>
                }
                containerClassName="flex space-x-2 text-sm"
                pageClassName="bg-white dark:bg-[#2C2C3B] px-3 py-1 rounded-md shadow-sm hover:bg-gray-300 dark:hover:bg-[#3C3C4B] active:scale-95 cursor-pointer transition-transform duration-200 ease-in-out"
                pageLinkClassName="w-full h-full flex justify-center items-center text-black dark:text-white"
                activeClassName="bg-[#2563EB] text-white !border-[#2563EB] scale-105"
                activeLinkClassName="text-gray-500"
                previousClassName="bg-white dark:bg-[#2C2C3B] px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-[#3C3C4B] active:scale-95 cursor-pointer"
                nextClassName="bg-white dark:bg-[#2C2C3B] px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-[#3C3C4B] active:scale-95 cursor-pointer"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    )
}

export default Pagination