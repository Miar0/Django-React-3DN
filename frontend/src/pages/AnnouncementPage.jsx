import React, { useState, useMemo } from 'react'
import pets from '../data/pets'
import PetCard from '../components/carousel/PetCard'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import SortDropdown from '../components/SortDropdown'
import ButtonCreate from '../components/ButtonCreate'

const ITEMS_PER_PAGE = 12

const AnnouncementPage = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [query, setQuery] = useState('')
    const [sortValue, setSortValue] = useState('name')

    const filteredPets = useMemo(() => {
        let result = pets.filter((pet) =>
            pet.name.toLowerCase().includes(query.toLowerCase())
        )

        if (sortValue === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortValue === 'type') {
            result.sort((a, b) => (a.type || '').localeCompare(b.type || ''))
        } else if (sortValue === 'newest') {
            result.reverse()
        }

        return result
    }, [query, sortValue])

    const offset = currentPage * ITEMS_PER_PAGE
    const currentPets = filteredPets.slice(offset, offset + ITEMS_PER_PAGE)
    const pageCount = Math.ceil(filteredPets.length / ITEMS_PER_PAGE)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    return (
        <div className="min-h-screen max-w-[1440px] mx-auto py-10">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 max-w-[1440px] mx-auto px-8">
                <div className="flex gap-4 w-full">
                    <SortDropdown
                        selected={sortValue}
                        onChange={(value) => {
                            setSortValue(value)
                            setCurrentPage(0)
                        }}
                    />
                    <SearchInput
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                            setCurrentPage(0)
                        }}
                        placeholder="Шукати тваринку"
                    />
                </div>
                <ButtonCreate onClick={() => console.log('Open create announcement')} />
            </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1440px] w-full mx-auto">
                    {currentPets.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>


            <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
    )
}

export default AnnouncementPage
