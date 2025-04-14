import React from 'react';
import SortDropdown from './SortDropdown.jsx';
import SearchInput from './SearchInput.jsx';

const Filters = ({ sortOption, setSortOption, searchTerm, setSearchTerm }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 rounded-xl shadow-sm">
            <div className="flex justify-start">
                <SortDropdown
                    selected={sortOption}
                    onChange={setSortOption}
                    options={[
                        { value: 'newest', label: 'Найновіші' },
                        { value: 'oldest', label: 'Найстаріші' },
                        { value: 'title', label: 'По заголовку' }
                    ]}
                />
            </div>
            <div className="flex justify-center">
                <SearchInput
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Шукати за назвою або описом..."
                />
            </div>
        </div>
    );
};

export default Filters;
