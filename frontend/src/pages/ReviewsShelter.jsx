import React, {useState, useMemo, useEffect} from 'react';
import Pagination from '../components/Pagination';
import SortDropdown from '../components/SortDropdown';
import ButtonCreate from '../components/ButtonCreateReview';
import reviews from "../data/reviews.js";
import ReviewCard from "../components/reviews/ReviewCard.jsx";
import SearchInput from "../components/SearchInput.jsx";

const ITEMS_PER_PAGE = 12;

const defaultOptions = [
    {label: 'За назвою (А-Я)', value: 'name'},
    {label: 'За оцінкою (вища спочатку)', value: 'ratingDesc'},
    {label: 'За оцінкою (нижча спочатку)', value: 'ratingAsc'},
];

const ReviewsPage = () => {
    const [allReviews, setAllReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [query, setQuery] = useState('');
    const [sortValue, setSortValue] = useState('name');

    useEffect(() => {
        setAllReviews(reviews);
    }, []);

    const filteredReviews = useMemo(() => {
        let result = allReviews.filter((review) =>
            review.name.toLowerCase().includes(query.toLowerCase())
        );

        if (sortValue === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'ratingDesc') {
            result.sort((a, b) => b.rating - a.rating);
        } else if (sortValue === 'ratingAsc') {
            result.sort((a, b) => a.rating - b.rating);
        }

        return result;
    }, [query, sortValue, allReviews]);

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentReviews = filteredReviews.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(filteredReviews.length / ITEMS_PER_PAGE);

    return (
        <div className="min-h-screen max-w-[1440px] mx-auto py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 px-8">
                <div className="flex gap-4 w-full">
                    <SortDropdown
                        options={defaultOptions}
                        selected={sortValue}
                        onChange={(value) => setSortValue(value)}
                    />
                    <SearchInput
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Пошук за іменем..."/>
                </div>
                <ButtonCreate/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
                {currentReviews.map((review) => (
                    <ReviewCard key={review.id} review={review}/>
                ))}
            </div>

            <Pagination pageCount={pageCount} onPageChange={({selected}) => setCurrentPage(selected)}/>
        </div>
    );
};

export default ReviewsPage;
