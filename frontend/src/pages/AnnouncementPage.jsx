import React, { useState, useMemo, useEffect } from 'react';
import { getPetsFromStorage } from '../utils/storage';
import PetCard from '../components/carousel/PetCard';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';
import SortDropdown from '../components/SortDropdown';
import ButtonCreate from '../components/ButtonCreate';

const ITEMS_PER_PAGE = 12;

const AnnouncementPage = () => {
    const [allPets, setAllPets] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [query, setQuery] = useState('');
    const [sortValue, setSortValue] = useState('name');

    useEffect(() => {
        setAllPets(getPetsFromStorage());
    }, []);

    const filteredPets = useMemo(() => {
        let result = allPets.filter((pet) =>
            pet.name.toLowerCase().includes(query.toLowerCase())
        );

        if (sortValue === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'type') {
            result.sort((a, b) => (a.type || '').localeCompare(b.type || ''));
        } else if (sortValue === 'newest') {
            result.reverse();
        }

        return result;
    }, [query, sortValue, allPets]);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentPets = filteredPets.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filteredPets.length / ITEMS_PER_PAGE);

    return (
        <div className="min-h-screen max-w-[1440px] mx-auto py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 max-w-[1440px] mx-auto px-8">
                <div className="flex gap-4 w-full">
                    <SortDropdown selected={sortValue} onChange={(value) => setSortValue(value)} />
                    <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Шукати тваринку" />
                </div>
                <ButtonCreate />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1440px] w-full mx-auto">
                {currentPets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>

            <Pagination pageCount={pageCount} onPageChange={({ selected }) => setCurrentPage(selected)} />
        </div>
    );
};

export default AnnouncementPage;
