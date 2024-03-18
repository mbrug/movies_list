import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../store/actionTypes.ts";
import {selectSearchParams} from "../../store/actions/movieActions.ts";
import {setSearchParams} from "../../store/reducers/moviesReducer.ts";


const SearchBar = () => {
    const dispatch = useAppDispatch();
    const { query, year } = useSelector(selectSearchParams);
    const [searchTerm, setSearchTerm] = useState("");
    const [yearTerm, setYear] = useState("");

    useEffect(() => {
        setSearchTerm(query)
        setYear(year)
    }, [])

    const handleSearch = () => {
        dispatch(setSearchParams({ query: searchTerm, year: yearTerm, page: 1, totalResults: 0}));
    };

    return (
        <div className="bg-white shadow-md rounded-lg px-4 py-2 flex justify-center items-center fixed w-full">
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none w-2/5 mr-4 px-2 py-1 border border-gray-300 rounded-md"
            />
            <input
                type="number"
                placeholder="Year"
                value={yearTerm}
                onChange={(e) => setYear(e.target.value)}
                className="outline-none w-20 mr-4 px-2 py-1 border border-gray-300 rounded-md"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
