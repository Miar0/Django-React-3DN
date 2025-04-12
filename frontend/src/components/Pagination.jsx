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
                    <div className="w-full h-full flex justify-center items-center">
                        <FaChevronLeft size={14} />
                    </div>
                }
                nextLabel={
                    <div className="w-full h-full flex justify-center items-center">
                        <FaChevronRight size={14} />
                    </div>
                }
                breakLabel={<div className="px-3 py-1 text-[#0700FF]">...</div>}
                containerClassName="flex space-x-2 text-sm"
                pageClassName="bg-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer"
                pageLinkClassName="w-full h-full flex justify-center items-center text-[#0700FF]"
                activeLinkClassName="underline font-semibold text-[#0700FF]"
                previousClassName="bg-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer"
                nextClassName="bg-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer"
                disabledClassName="opacity-50 cursor-not-allowed"
            />
        </div>
    )
}

export default Pagination
